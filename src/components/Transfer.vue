<template>
  <div id="transfer" :style="{transform: `translateY(${pageTranslateY}px)`}">
    <div class="tc-card">
      <div class="tc-title">{{ $t('Transfer.title') }}</div>
      <div class="trans-input">
        <div>
          <p>To</p>
          <input-address type="address" :isCorrect.sync="correctToAdr" @pushData="updateToAdr" />
          <p>Value</p>
          <input-uint type="uint256" :isCorrect.sync="correctToValue" @pushData="updateToValue" />
        </div>
        <div class="trans-balance">
          <p>Blance</p>
          <div class="trans-bi">
            <span>{{balanceI}}</span><span>{{balanceF}}</span>
          </div>
        </div>
      </div>
      <hr>
      <div class="trans-con">
        <set-tx-config
          :active="correctToAdr && correctToValue"
          computedGas="21000"
          @selectFrom="getBalance"
          @next="onNext" />
        <div class="trans-confirm">
          <div class="trans-info" v-html="txInfo"></div>
          <div @click="send" :class="{'button-active': waitToSend}" class="button-blue">
            <div>{{ $t('Common.send') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import InputAddress from 'common/gui/InputAddress'
import InputUint from 'common/gui/InputUint'
import SetTxConfig from 'common/function/SetTxConfig'

export default {
  name: 'Transfer',
  data () {
    return {
      from: '',
      toAddress: '',
      value: '',
      balanceI: '0',
      balanceF: '',

      correctToAdr: false,
      correctToValue: false,
      waitToSend: false,
      txInfo: this.$t('Common.txInfo.base'),
      txConfig: {},

      pageTranslateY: 0,
      height: 0,
      updateTimer: 0
    }
  },
  computed: {
    ...mapState([
      'web3',
      'eth'
    ])
  },
  created () {
    this.$emit('routerinit', this)
  },
  mounted () {
    this.height = this.$el.getBoundingClientRect().height
    this.$el.addEventListener('mousewheel', this.onMousewheel)
    this.updateBalance()
  },
  methods: {
    ...mapMutations({
      'afterTxSend': 'log/afterTxSend',
      'afterTxError': 'log/afterTxError'
    }),
    ...mapActions([
      'signTx',
      'notice'
    ]),
    ...mapActions({
      addPendingTx: 'log/addPendingTx'
    }),
    updateToAdr (_, value) {
      this.toAddress = value
    },
    updateToValue (_, value) {
      this.value = value
    },
    getBalance (address) {
      this.from = address
      this.updateBalance()
    },
    updateBalance () {
      clearTimeout(this.updateTimer)
      if (this.from) {
        this.web3.eth.getBalance(this.from).then(balance => {
          if (balance.length > 27) {
            this.balanceI = '> 1 Billion'
            this.balanceF = ''
          } else {
            this.balanceI = Math.floor(balance / 1e18)
            const bf = balance.padStart(18, '0').substr(-18).split('')
            for (let i = 0; i < 18; i += 3) {
              bf[i] = ',' + bf[i]
            }
            this.balanceF = bf.join('')
          }
        })
      }
      this.updateTimer = setTimeout(() => {
        this.updateBalance()
      }, 5000)
    },
    onNext (options) {
      // this.web3.eth.getTransactionCount(options.from, 'pending').then(res => {
      this.web3.eth.getTransactionCount(options.from).then(res => {
        this.txConfig = { nonce: res, ...options }
        this.txConfig.nonce = res
        this.txConfig.to = this.toAddress
        this.txConfig.value = this.value
        this.txInfo = `${this.$t('Common.txInfo.base')}:<br>`
        this.txInfo += `nonce: ${res} --- OK<br>`
        this.txInfo += `from: ${this.txConfig.from.substr(0, 22)}... --- OK<br>`
        this.txInfo += `to: ${this.toAddress.substr(0, 22)}... --- OK<br>`
        this.txInfo += `value: ${this.value} --- OK<br>`
        const inputGasPrice = Number(this.web3.utils.fromWei(this.txConfig.gasPrice, 'Gwei'))
        let gasPriceStatus = 'OK'
        if (inputGasPrice < this.eth.MIN_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too low'
        } else if (inputGasPrice > this.eth.MAX_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too high'
        }
        this.txInfo += `Gas Price: ${inputGasPrice} Gwei --- ${gasPriceStatus}<br>`
        const inputGas = parseInt(this.txConfig.gas)
        const suggestGas = 21000
        const gasSuitable = inputGas >= suggestGas
        this.txInfo += `Gas Limit: ${inputGas} --- ${gasSuitable ? 'OK' : 'Gas set too low'}<br>`
        this.txInfo += 'Notice:<br>'
        const maxGas = inputGasPrice * inputGas
        this.txInfo += `Maximum gas cost: ${maxGas} Gwei<br>`
        this.waitToSend = true
      })
    },
    async send () {
      if (!this.waitToSend) {
        return
      }
      this.waitToSend = false
      const from = this.txConfig.from
      const to = this.txConfig.to
      const value = this.txConfig.value

      const rawTx = await this.signTx(this.txConfig)

      let txHash = ''
      this.web3.eth.sendSignedTransaction(rawTx)
        .on('transactionHash', hash => {
          txHash = hash
          this.afterTxSend({ hash, from, to, value })
          this.notice(['log', this.$t('Common.notice.afterSend') + hash, 10000])
          this.addPendingTx([hash, receipt => {
            if (receipt.status) {
              this.notice(['log', this.$t('Common.notice.txSuccess') + receipt.transactionHash, 10000])
            } else {
              this.notice(['error', this.$t('Common.notice.txEVMError'), 10000])
            }
            this.updateBalance()
          }])
        })
        .on('error', err => {
          if (/EVM/.test(err.message)) {
            return
          }
          let errMsg = (err.message || err).toString()
          errMsg = errMsg.split(':')[0]
          this.afterTxError({ txHash, errMsg })
          this.notice(['error', this.$t('Common.notice.txError') + errMsg, 10000])
        })
    }
  },
  beforeDestroy () {
    clearTimeout(this.updateTimer)
  },
  components: {
    InputAddress,
    InputUint,
    SetTxConfig
  }
}
</script>

<style lang="stylus" scoped>
#transfer
  padding 30px
  >div
    margin 10px
.trans-input
  margin 20px 0
  display flex
  >div
    flex 1 0 50%
    width 50%
  p
    line-height 30px
.trans-balance
  padding-left 60px
  box-sizing border-box
.trans-bi
  display block
  margin-top 50px
  line-height 10px
  font-weight bold
  color #014676
  word-break break-all
  span:first-child
    font-size 30px
  span:last-child
    font-size 12px
.trans-con
  display flex
  >div
    flex 1 0 50%
    width 50%
.trans-confirm
  padding-left 60px
  box-sizing border-box
  >div
    margin 20px 0
  .trans-info
    font-size 12px
    border solid 1px #ddd
    background-color #eee
    color #666
    border-radius 3px
    height 160px
    padding 9px
    box-sizing border-box

@media screen and (max-width: 960px)
  .trans-con
    flex-direction column
    >div
      width 100%
  .trans-confirm
    padding-left 0
  .trans-balance
    padding-left 20px
</style>
