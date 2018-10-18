<template>
  <div id="interact" :style="{transform: `translateY(${pageTranslateY}px)`}">
    <div class="tc-card">
      <div class="tc-title">{{ $t('Interact.title') }}</div>
      <div class="contarct-info">
        <div class="left-part">
          <p class="title">{{ $t('Interact.contract') }}</p>
          <selector
            :options="contractNames"
            :defaultOptions="contractNamesDefaultOptions"
            @change="selectContract">
          </selector>
        </div>
        <div class="right-part">
          <p class="title">{{ $t('Interact.address') }}</p>
          <input
            :class="{'input-active': !haveSelectedContract}"
            :disabled="haveSelectedContract"
            v-model="contract.address"
            type="text">
        </div>
        <div class="clear"></div>
        <p class="title">{{ $t('Interact.api') }}</p>
        <textarea
          :class="{
            'input-active': !haveSelectedContract,
            'input-error': isErrorInInterfaces
          }"
          :disabled="haveSelectedContract"
          @change="checkInterfaceInput"
          v-model="contract.interface"
          class="code">
        </textarea>
      </div>
      <hr>
      <div>
        <div class="left-part interface-data-box">
          <p class="title">{{ $t('Interact.interface') }}</p>
          <selector
            :options="interfaceNames"
            @change="selectInterface">
          </selector>
          <div
            class="input-data-boxs"
            v-for="(item, index) in inputInterfaceData"
            :key="index">
            <span>{{item.name}}</span>
            <interface-input
              :index="index"
              :type="item.type"
              :isCorrect.sync="item.isCorrect"
              @pushData="pushData" />
          </div>
        </div>
        <div class="right-part" v-if="focusInterface.constant === false">
          <set-tx-config
            :active="true"
            :computedGas="computedGas"
            @next="onNext">
          </set-tx-config>
        </div>
        <div class="clear"></div>
        <div class="left-part">
          <div class="tx-info" v-html="txInfo"></div>
          <div @click="send" :class="{'button-active': waitToSend}" class="button-blue">
            <div>{{ $t('Common.send') }}</div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import Selector from '@/components/common/function/Selector'
import SetTxConfig from '@/components/common/function/SetTxConfig'
import contracts from 'static/contracts.json'

import InterfaceInput from '@/components/common/gui/InterfaceInput'

const contractNames = contracts.map(contract => {
  return contract.name
})

export default {
  name: 'Interact',
  data () {
    return {
      contract: {
        address: '',
        interface: ''
      },
      haveSelectedContract: false,
      contractNames,
      interfacesList: [],
      interfaceNames: [],
      isErrorInInterfaces: false,
      focusInterface: {},
      focusContract: {},
      inputInterfaceData: [],
      inputArguments: [],
      computedGas: 0,
      txConfig: {},
      txInfo: this.$t('Common.txInfo.base'),
      pageTranslateY: 0,
      height: 0
    }
  },
  computed: {
    ...mapState([
      'web3',
      'eth'
    ]),
    contractNamesDefaultOptions () {
      return [this.$t('Interact.custom')]
    },
    waitToSend () {
      let getReady = true
      for (let i = 0; i < this.inputInterfaceData.length; i++) {
        getReady &= this.inputInterfaceData[i].isCorrect
      }
      if (!this.focusInterface.constant) {
        getReady &= Boolean(this.txConfig.from)
      }
      return getReady
    }
  },
  watch: {
    interfacesList (newValue) {
      this.interfaceNames = newValue.reduce((prev, next) => {
        if (next.type === 'function') {
          prev.push(next.name)
        }
        return prev
      }, [])
      this.focusInterface = {}
      this.inputInterfaceData = []
    }
  },
  created () {
    this.$emit('routerinit', this)
  },
  mounted () {
    this.height = this.$el.getBoundingClientRect().height
    this.$el.addEventListener('mousewheel', this.onMousewheel)
  },
  methods: {
    ...mapMutations({
      'afterTxSend': 'log/afterTxSend',
      'afterTxReceipt': 'log/afterTxReceipt',
      'afterTxError': 'log/afterTxError'
    }),
    ...mapActions([
      'pushAccountToWallet',
      'notice'
    ]),
    setComputedGas (value) {
      this.computedGas = value
    },
    selectContract (name, isDefaultOption) {
      if (isDefaultOption) {
        this.haveSelectedContract = false
      } else {
        this.haveSelectedContract = true
        const contract = contracts.filter(item => {
          return item.name === name
        })[0]
        if (contract) {
          this.contract.address = contract.address
          this.contract.interface = JSON.stringify(contract.interface)
          this.checkInterfaceInput(undefined, contract.interface)
        }
      }
    },
    checkInterfaceInput (_, interfacesJSON) {
      if (!interfacesJSON) {
        try {
          interfacesJSON = JSON.parse(this.contract.interface)
        } catch (err) {
          this.isErrorInInterfaces = true
          this.interfacesList = []
          return
        }
      }
      try {
        this.focusContract = new this.web3.eth.Contract(interfacesJSON)
      } catch (err) {
        this.isErrorInInterfaces = true
        this.interfacesList = []
        return
      }
      this.isErrorInInterfaces = false
      this.interfacesList = interfacesJSON
    },
    selectInterface (name) {
      const api = this.interfacesList.filter(item => {
        return item.name === name
      })[0]
      this.focusInterface = api || {}
      this.inputInterfaceData = []
      this.inputArguments = []
      this.txInfo = this.$t('Common.txInfo.base')
      this.$nextTick(() => {
        this.inputInterfaceData = [...api.inputs]
      })
    },
    pushData (index, value) {
      this.inputArguments[index] = value
      if (this.focusInterface.constant) {
        return
      }
      this.focusContract.options.address = this.contract.address
      this.focusContract.methods[this.focusInterface.name](...this.inputArguments)
        .estimateGas()
        .then(this.setComputedGas)
        .catch(err => {
          // this.notice(['warn', this.$t('Common.notice.warn') + (err.message || err), 10000])
          console.warn(err.message || err)
        })
    },
    onNext (options) {
      // this.web3.eth.getTransactionCount(options.from, 'pending').then(res => {
      this.web3.eth.getTransactionCount(options.from).then(res => {
        this.txConfig = { nonce: res, ...options }
        this.txInfo = `${this.$t('Common.txInfo.base')}:<br>`
        this.txInfo += `nonce: ${res} --- OK<br>`
        this.txInfo += `from: ${options.from.substr(0, 22)}... --- OK<br>`
        const inputGasPrice = Number(this.web3.utils.fromWei(options.gasPrice, 'Gwei'))
        let gasPriceStatus = 'OK'
        if (inputGasPrice < this.eth.MIN_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too low'
        } else if (inputGasPrice > this.eth.MAX_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too high'
        }
        this.txInfo += `Gas Price: ${inputGasPrice} Gwei --- ${gasPriceStatus}<br>`
        const inputGas = parseInt(options.gas)
        const suggestGas = parseInt(this.computedGas)
        const gasSuitable = inputGas >= suggestGas
        this.txInfo += `Gas Limit: ${inputGas} --- ${gasSuitable ? 'OK' : 'Gas set too low'}<br>`
        this.txInfo += 'Notice:<br>'
        const maxGas = inputGasPrice * inputGas
        this.txInfo += `Maximum gas cost: ${maxGas} Gwei<br>`
      })
    },
    send () {
      if (!this.waitToSend) {
        return
      }
      this.focusContract.options.address = this.contract.address
      const tx = this.focusContract.methods[this.focusInterface.name](...this.inputArguments)
      if (this.focusInterface.constant) {
        const outputs = [...this.focusInterface.outputs]
        tx.call().then(res => {
          if (typeof res !== 'object') {
            res = [res]
          }
          let result = ''
          for (let i = 0; i < outputs.length; i++) {
            const output = outputs[i]
            result += `${output.name || 'Arg' + (i + 1)}: <${output.type}> ${res[i]}, `
          }
          this.notice(['log', this.$t('Common.notice.response') + result.slice(0, -2), 10000])
        }).catch(err => {
          this.notice(['error', this.$t('Common.notice.error') + (err.message || err), 10000])
        })
      } else {
        try {
          this.pushAccountToWallet(this.txConfig.from)
        } catch (err) {
          this.notice(['error', this.$t('Common.notice.error') + (err.message || err), 10000])
          return
        }
        const from = this.txConfig.from
        const to = this.focusContract.options.address
        const value = this.txConfig.value || '0'
        let txHash = ''
        tx.send(this.txConfig)
          .on('transactionHash', hash => {
            txHash = hash
            this.afterTxSend({ hash, from, to, value })
            this.notice(['log', this.$t('Common.notice.afterSend') + hash, 10000])
          })
          .on('receipt', rec => {
            this.afterTxReceipt(rec)
            this.notice(['log', this.$t('Common.notice.txSuccess') + rec.transactionHash, 10000])
          })
          .on('error', err => {
            let errMsg = (err.message || err).toString()
            errMsg = errMsg.split(':')[0]
            this.afterTxError({ txHash, errMsg })
            this.notice(['error', this.$t('Common.notice.txError') + errMsg, 10000])
          })
        this.txConfig = {}
      }
    }
  },
  components: {
    Selector,
    SetTxConfig,
    InterfaceInput
  }
}
</script>

<style lang="stylus" scoped>
#interact
  padding 30px
  >div
    margin 10px

.left-part
  width 50%
  float left
  padding-right 100px
  box-sizing border-box
.right-part
  width 50%
  float right
.title
  line-height 30px

.contarct-info
  margin 20px 0
  input
    width 100%
    transition .4s
  textarea
    width 100%
    font-size 12px
    display block
    word-break break-all
    transition .4s
    height 150px
    resize vertical
.interface-data-box
  margin -10px 0 20px
.input-data-boxs
  padding-left 20px
  font-size 14px
  span
    display block
    margin-top 8px
    line-height 22px
.tx-info
  margin-bottom 20px
  font-size 12px
  border solid 1px #ddd
  background-color #eee
  color #666
  border-radius 3px
  height 160px
  padding 9px
  box-sizing border-box

@media screen and (max-width: 960px)
  .left-part
    width 100%
    padding-right 0
  .right-part
    width 100%
</style>
