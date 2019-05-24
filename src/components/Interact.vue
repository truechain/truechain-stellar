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
            @change="estimateGas"
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
          v-model="contract.abi"
          class="code">
        </textarea>
        <div class="save-contract">
          <p class="title new">储存合约信息</p>
          <div>
            <div>名称</div>
            <input v-model="contractName" type="text">
            <div class="button b-normal" @click="toSaveContract">储存</div>
            <div class="button b-error" @click="toRemoveContract">删除</div>
          </div>
        </div>
      </div>
      <hr>
      <div>
        <div class="left-part interface-data-box">
          <p class="title">{{ $t('Interact.interface') }}</p>
          <selector
            :options="interfaceNames"
            @change="selectInterface">
          </selector>
          <div class="input-value-boxs" v-if="focusInterfacePaybale">
            <span>Pay value (wei)</span>
            <interface-input
              :index="-1"
              type="uint256"
              :isCorrect.sync="payIsCorrect"
              @pushData="pushData" />
          </div>
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
            :active="!focusInterfacePaybale || payIsCorrect"
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

import Selector from 'common/function/Selector'
import SetTxConfig from 'common/function/SetTxConfig'

import InterfaceInput from 'common/gui/InterfaceInput'

function genDefaultInputs (inputs) {
  return inputs.map(input => {
    switch (true) {
      case /\[\]/.test(input.type):
        return []
      case /int/.test(input.type):
        return '0'
      case /address/.test(input.type):
        return '0x0000000000000000000000000000000000000000'
      case /bool/.test(input.type):
        return false
      case /byte/.test(input.type):
        return '0x00'
      default:
        return ''
    }
  })
}

export default {
  name: 'Interact',
  data () {
    return {
      contract: {
        address: '',
        interface: ''
      },
      haveSelectedContract: false,
      contractName: '',
      interfacesList: [],
      interfaceNames: [],
      isErrorInInterfaces: false,
      focusInterface: {},
      focusInterfacePaybale: false,
      payValue: '0',
      payIsCorrect: false,
      focusContract: {},
      inputInterfaceData: [],
      inputArguments: [],
      computedGas: '---',
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
    ...mapState({
      dbState: state => state.indexdb.state,
      contracts: state => state.indexdb.contracts
    }),
    contractNames ()  {
      return this.contracts.map(contract => {
        return contract.name
      })
    },
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
      this.focusInterfacePaybale = false
      this.inputInterfaceData = []
    }
  },
  created () {
    this.$emit('routerinit', this)
  },
  mounted () {
    const query = this.$route.query
    this.updateContractByQuery(query)
    this.height = this.$el.getBoundingClientRect().height
    this.$el.addEventListener('mousewheel', this.onMousewheel)
  },
  beforeRouteUpdate (newRoute, _, next) {
    const query = newRoute.query
    this.updateContractByQuery(query)
    next()
  },
  methods: {
    ...mapMutations({
      'afterTxSend': 'log/afterTxSend',
      'afterTxError': 'log/afterTxError'
    }),
    ...mapActions([
      'signTx',
      'notice',
      'updateContract',
      'removeContract'
    ]),
    ...mapActions({
      addPendingTx: 'log/addPendingTx'
    }),
    updateContractByQuery (query) {
      this.contract.address = ''
      this.contract.abi = ''
      this.interfacesList = []
      if (query.hasOwnProperty('ERC20')) {
        const ERC20Config = this.contracts.find(c => c.name === 'ERC20') || { interface: [] }
        const abi = ERC20Config.interface
        this.contract.address = query['ERC20']
        this.contract.abi = JSON.stringify(abi)
        this.checkInterfaceInput(undefined, abi)
      }
    },
    selectContract (name, isDefaultOption) {
      if (isDefaultOption) {
        this.haveSelectedContract = false
      } else {
        // this.haveSelectedContract = true
        const contract = this.contracts.filter(item => {
          return item.name === name
        })[0]
        if (contract) {
          this.contractName = contract.name
          this.contract.address = contract.address
          this.contract.abi = JSON.stringify(contract.abi)
          this.checkInterfaceInput(undefined, contract.abi)
        }
      }
    },
    toSaveContract () {
      const name = this.contractName
      const address = this.contract.address
      const abi = this.interfacesList
      if (!name || !address || this.isErrorInInterfaces) {
        return this.notice(['error', '请确保合约地址或接口输入正确，并且输入合约名称', 4000])
      }
      this.updateContract({ name, address, abi }).then(res => {
        if (res) {
          this.notice(['info', '合约储存成功', 4000])
        } else {
          this.notice(['error', '合约储存失败', 4000])
        }
      })
    },
    toRemoveContract () {
      const name = this.contractName
      if (!name) {
        return this.notice(['error', '请输入将要删除的合约名称', 4000])
      }
      this.removeContract(name).then(res => {
        if (res) {
          this.contractName = ''
          this.notice(['info', '合约删除成功', 4000])
        } else {
          this.notice(['error', '合约删除失败', 4000])
        }
      })
    },
    checkInterfaceInput (_, interfacesJSON) {
      if (!interfacesJSON) {
        try {
          interfacesJSON = JSON.parse(this.contract.abi)
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
      const api = this.interfacesList.find(item => {
        return item.name === name
      }) || {}
      this.focusInterface = api
      this.inputInterfaceData = []
      this.inputArguments = genDefaultInputs(api.inputs)
      this.focusInterfacePaybale = api.payable
      this.payValue = '0'
      this.payIsCorrect = false
      this.txInfo = this.$t('Common.txInfo.base')
      this.estimateGas()
      this.$nextTick(() => {
        this.inputInterfaceData = [...api.inputs]
      })
    },
    pushData (index, value) {
      if (index === -1) {
        this.payValue = value
      } else {
        this.inputArguments[index] = value
      }
      if (this.focusInterface.constant) {
        return
      }
      this.estimateGas()
    },
    estimateGas () {
      this.computedGas = '---'
      if (this.focusContract.options && this.focusInterface.name && this.contract.address) {
        this.focusContract.options.address = this.contract.address
        this.focusContract.methods[this.focusInterface.name](...this.inputArguments)
          .estimateGas()
          .then(res => {
            this.computedGas = res + 15000
          }).catch(err => {
            // this.notice(['warn', this.$t('Common.notice.warn') + (err.message || err), 10000])
            console.warn(err.message || err)
          })
      }
    },
    onNext (options) {
      // this.web3.eth.getTransactionCount(options.from, 'pending').then(res => {
      this.web3.eth.getTransactionCount(options.from).then(res => {
        this.txConfig = { nonce: res, ...options }
        this.txInfo = `${this.$t('Common.txInfo.base')}:<br>`
        this.txInfo += `nonce: ${res} --- OK<br>`
        this.txInfo += `from: ${options.from.substr(0, 22)}... --- OK<br>`
        if (this.focusInterfacePaybale) {
          this.txConfig.value = this.payValue
          this.txInfo += `value: ${this.payValue} --- OK<br>`
        }
        const inputGasPrice = Number(this.web3.utils.fromWei(options.gasPrice, 'Gwei'))
        let gasPriceStatus = 'OK'
        if (inputGasPrice < this.eth.MIN_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too low'
        } else if (inputGasPrice > this.eth.MAX_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too high'
        }
        this.txInfo += `Gas Price: ${inputGasPrice} Gwei --- ${gasPriceStatus}<br>`
        const inputGas = parseInt(options.gas)
        const suggestGas = parseInt(this.computedGas) || 100000
        const gasSuitable = inputGas >= suggestGas
        this.txInfo += `Gas Limit: ${inputGas} --- ${gasSuitable ? 'OK' : 'Gas set too low'}<br>`
        this.txInfo += 'Notice:<br>'
        const maxGas = inputGasPrice * inputGas
        this.txInfo += `Maximum gas cost: ${maxGas.toString().substr(0, 8)} Gwei<br>`
      })
    },
    async send () {
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
        const from = this.txConfig.from
        const to = this.focusContract.options.address
        const value = this.txConfig.value || '0'
        const data = tx.encodeABI()

        const rawTx = await this.signTx(Object.assign({ to, data }, this.txConfig))

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
.input-data-boxs, .input-value-boxs
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

.save-contract
  margin-top 15px
  width 50%
  >div
    line-height 40px
    display flex
    div
      flex 0 0 60px
    .button
      margin-left 6px
      flex 0 0 40px
      text-align center
      padding 0 6px
      border-radius 3px
      color #fff
      opacity .6
      cursor pointer
      transition opacity .4s
      &:hover
        opacity 1

@media screen and (max-width: 960px)
  .left-part
    width 100%
    padding-right 0
  .right-part
    width 100%
  .save-contract
    width 100%
</style>
