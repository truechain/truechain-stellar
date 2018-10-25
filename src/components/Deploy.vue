<template>
  <div id="deploy" :style="{transform: `translateY(${pageTranslateY}px)`}">
    <div class="tc-card">
      <div class="tc-title">{{ $t('Deploy.title') }}</div>
      <div class="select-method">
        {{ $t('Deploy.deployBy') }}
        <div>
          <span :class="{'active': needCompile}" @click="toggleSCMode('source')">{{ $t('Deploy.solSource') }}</span>
          <span :class="{'active': !needCompile}" @click="toggleSCMode('code')">{{ $t('Deploy.codeAndApi') }}</span>
        </div>
        <span class="resize" @click="resizeTextarea">{{ $t('Common.resize') }}</span>
      </div>
      <div class="clear"></div>
      <div class="code-input">
        <div v-if="needCompile" class="source-box">
          <p>{{ $t('Deploy.solSourceCode') }}</p>
          <textarea class="code"
            :class="{'input-active': needCompile}"
            :disabled="!needCompile"
            v-model="sourceCode">
          </textarea>
        </div>
        <div v-if="needCompile" class="compile-button">
          <div class="loading">
            <div>
              <anim-loading :isActive="isCompiling"></anim-loading>
            </div>
          </div>
          <div class="button" @click="queryCompile">
            <icon-compile :config="{color: '#0d85da'}"></icon-compile>
            <p>{{ $t('Deploy.compile') }}</p>
          </div>
          <div class="select-contract">
            <div v-if="defaultContractName">
              <selector
                :defaultSelect="defaultContractName"
                :options="contractsName"
                @change="changeCompiledResult">
              </selector>
            </div>
          </div>
        </div>
        <div class="code-box">
          <p>{{ $t('Deploy.compiled') }}</p>
          <textarea class="code"
            :class="{
              'input-active': !needCompile,
              'input-error': compiledCode && !legalCode
            }"
            :disabled="needCompile"
            v-model="compiledCode">
          </textarea>
          <p>{{ $t('Deploy.interface') }}</p>
          <textarea class="code"
            :class="{
              'input-active': !needCompile,
              'input-error': interfaceJSON && !legalABI
            }"
            :disabled="needCompile"
            v-model="interfaceJSON">
          </textarea>
        </div>
      </div>
      <hr>
      <div class="deploy-cons" v-if="conInputs">
        <p>{{ $t('Deploy.constructor') }}</p>
        <div v-for="(item, index) in conInputs" :key="index">
          <span class="label">{{item.name}}</span>
          <interface-input class="input"
            :index="index"
            :type="item.type"
            :isCorrect.sync="item.isCorrect"
            @pushData="pushData" />
        </div>
        <div class="clear"></div>
      </div>
      <div class="form-deploy">
        <set-tx-config
          :active="legalCode && legalABI"
          :computedGas="computedGas"
          @next="onNext">
        </set-tx-config>
      </div>
      <div class="deploy-confirm">
        <div class="deploytx-info" v-html="deployTxInfo"></div>
        <div @click="deploy" :class="{'button-active': waitToDeploy}" class="button-blue">
          <div>{{ $t('Common.deploy') }}</div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import api from '@/api-config'

import IconCompile from 'svg-icon/compile'
import AnimLoading from '@/components/common/gui/Loading'
import Selector from '@/components/common/function/Selector'
import SetTxConfig from '@/components/common/function/SetTxConfig'

import InterfaceInput from '@/components/common/gui/InterfaceInput'

const debounce = (func, delay) => {
  if (typeof func !== 'function') {
    return func
  }
  delay = delay || 0
  let timer = 0
  const debouncedFunc = function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
  return debouncedFunc
}

export default {
  name: 'Deploy',
  data () {
    return {
      needCompile: true,
      contracts: {},
      contractsName: [],
      defaultContractName: '',
      sourceCode: '',
      compiledCode: '',
      legalCode: false,
      interfaceJSON: '',
      legalABI: false,
      isCompiling: false,
      conInputs: null,

      deployConfig: {},
      computedGas: 0,
      deployTxInfo: this.$t('Common.txInfo.base'),
      waitToDeploy: false,
      pageTranslateY: 0,
      height: 0
    }
  },
  computed: {
    ...mapState([
      'web3',
      'eth'
    ])
  },
  watch: {
    compiledCode (newValue) {
      if (newValue) {
        this.legalCode = true
        this.dUpdateComputedGas(newValue)
      }
    },
    interfaceJSON (newValue) {
      this.legalABI = true
      this.dUpdateInterface(newValue)
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
    toggleSCMode (mode) {
      this.sourceCode = ''
      this.compiledCode = ''
      this.interfaceJSON = ''
      this.contracts = {}
      this.contractsName = []
      this.defaultContractName = ''
      this.needCompile = mode === 'source'
    },
    resizeTextarea () {
      const tas = this.$el.querySelectorAll('textarea')
      for (let i = 0; i < tas.length; i++) {
        const ta = tas[i]
        ta.style.height = ''
      }
    },
    dUpdateComputedGas: debounce(function (code) {
      const contract = new this.web3.eth.Contract([])
      if (/[^0-9a-fA-F]/.test(code) || code.length % 2) {
        this.legalCode = false
        return
      }
      this.legalCode = true
      contract.deploy({data: '0x' + code})
        .estimateGas()
        .then(res => {
          this.computedGas = res
        }).catch(err => {
          this.computedGas = ''
          // this.notice(['warn', this.$t('Common.notice.warn') + (err.message || err), 10000])
          console.warn(err.message || err)
        })
    }, 500),
    dUpdateInterface: debounce(function (json) {
      let interfaceObj = null
      this.conInputs = null
      try {
        interfaceObj = JSON.parse(json)
      } catch (err) {
        this.legalABI = false
        return
      }
      if (interfaceObj.constructor.name === 'Array') {
        this.legalABI = true
        const contractCon = interfaceObj.find(func => func.type && func.type === 'constructor')
        if (contractCon && contractCon.inputs && contractCon.inputs.length > 0) {
          this.conInputs = contractCon.inputs.map(item => {
            return {
              name: item.name || 'unnamed',
              type: item.type || 'unknow',
              isCorrect: false,
              value: undefined
            }
          })
        }
      } else {
        this.legalABI = false
      }
    }, 500),
    pushData (index, value) {
      this.conInputs[index].value = value
    },
    queryCompile () {
      if (this.isCompiling) {
        return
      }
      this.isCompiling = true
      this.compiledCode = ''
      this.interfaceJSON = ''
      this.contracts = {}
      this.contractsName = []
      this.defaultContractName = ''
      api.compile(this.sourceCode).then(res => {
        const data = res.data
        if (data.error) {
          this.notice(['error', this.$t('Common.notice.compileError'), 10000])
          if (data.details) {
            console.log('%c' + data.details.join('\n\n'), 'color: red;')
          }
        } else {
          for (const contractName in data.contracts) {
            const contract = data.contracts[contractName]
            const name = contractName.slice(1)
            this.contracts[name] = {
              bytecode: contract.bytecode,
              interface: contract.interface
            }
            this.contractsName.push(name)
          }
          let lastContractName = this.contractsName[this.contractsName.length - 1]
          this.defaultContractName = lastContractName
          this.compiledCode = this.contracts[lastContractName].bytecode
          this.interfaceJSON = this.contracts[lastContractName].interface
          this.notice(['log', this.$t('Common.notice.compileSuccess'), 10000])
        }
      }).catch(err => {
        this.notice(['error', this.$t('Common.notice.error') + (err.message || err), 10000])
      }).then(() => {
        this.isCompiling = false
      })
    },
    changeCompiledResult (key, isDefaultOption) {
      const contract = this.contracts[key]
      if (contract) {
        this.compiledCode = contract.bytecode
        this.interfaceJSON = contract.interface
      }
    },
    onNext (options) {
      this.deployConfig = options
      // this.web3.eth.getTransactionCount(this.deployConfig.from, 'pending').then(res => {
      this.web3.eth.getTransactionCount(this.deployConfig.from).then(res => {
        this.deployConfig.nonce = res
        this.deployTxInfo = `${this.$t('Common.txInfo.base')}:<br>`
        this.deployTxInfo += `nonce: ${res} --- OK<br>`
        this.deployTxInfo += `from: ${this.deployConfig.from.substr(0, 22)}... --- OK<br>`
        const inputGasPrice = Number(this.web3.utils.fromWei(this.deployConfig.gasPrice, 'Gwei'))
        let gasPriceStatus = 'OK'
        if (inputGasPrice < this.eth.MIN_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too low'
        } else if (inputGasPrice > this.eth.MAX_GAS_PRICE_GWEI) {
          gasPriceStatus = 'Gas price set too high'
        }
        this.deployTxInfo += `Gas Price: ${inputGasPrice} Gwei --- ${gasPriceStatus}<br>`
        const inputGas = parseInt(this.deployConfig.gas)
        const suggestGas = parseInt(this.computedGas)
        const gasSuitable = inputGas >= suggestGas
        this.deployTxInfo += `Gas Limit: ${inputGas} --- ${gasSuitable ? 'OK' : 'Gas set too low'}<br>`
        this.deployTxInfo += 'Notice:<br>'
        const maxGas = inputGasPrice * inputGas
        this.deployTxInfo += `Maximum gas cost: ${maxGas} Gwei<br>`
        this.waitToDeploy = true
      })
    },
    deploy () {
      if (!this.waitToDeploy) {
        return
      }
      let interfaceObj = {}
      try {
        interfaceObj = JSON.parse(this.interfaceJSON)
      } catch (err) {
        this.notice(['error', this.$t('Common.notice.error') + (err.message || err), 10000])
        return
      }
      const newContract = new this.web3.eth.Contract(interfaceObj)
      let argus = []
      if (this.conInputs) {
        argus = this.conInputs.map(item => item.value)
      }
      const options = {
        data: '0x' + this.compiledCode,
        arguments: argus
      }
      const contractDeploy = newContract.deploy(options)
      const config = {
        nonce: this.deployConfig.nonce,
        from: this.deployConfig.from,
        gas: this.deployConfig.gas,
        gasPrice: this.deployConfig.gasPrice
      }
      try {
        this.pushAccountToWallet(this.deployConfig.from)
      } catch (err) {
        this.notice(['error', this.$t('Common.notice.error') + (err.message || err), 10000])
        return
      }
      this.waitToDeploy = false
      const from = this.deployConfig.from
      let txHash = ''
      contractDeploy.send(config)
        .on('transactionHash', hash => {
          txHash = hash
          this.afterTxSend({ hash, from })
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
    }
  },
  components: {
    IconCompile,
    AnimLoading,
    Selector,
    SetTxConfig,
    InterfaceInput
  }
}
</script>

<style lang="stylus" scoped>
#deploy
  padding 30px
  &>div
    margin 10px
.select-method
  line-height 40px
  margin 20px 0
  div
    display inline-block
    vertical-align bottom
    span
      padding 0 8px
      line-height 38px
      border solid #bbb 1px
      display block
      float left
      cursor pointer
      color #bbb
      transition .2s
      &:first-child
        border-radius 3px 0 0 3px
        border-right none
      &:last-child
        border-radius 0 3px 3px 0
        border-left none
  .resize
    float right
    cursor pointer
  .active
    background-color #0d85da
    color #fff
    border-color #0d85da
.code-input
  display flex
  p
    line-height 30px
  textarea
    width 100%
    font-size 12px
    display block
    word-break break-all
    transition .4s
    resize vertical
  .source-box
    flex 1 0 200px
    textarea
      height 290px
  .compile-button
    display flex
    flex-direction column
    flex 0 0 100px
    margin 30px 10px 0
    // background-color #ffb80033
    border-radius 3px
    .loading
      flex 1 1 50%
      >div
        width 40px
        height 40px
        margin 0 30px
    .button
      flex 0 0 100px
      width 100px
      height 100px
      padding 20px 0
      box-sizing border-box
      cursor pointer
      opacity .6
      transition opacity .3s
      &:hover
        opacity 1
    svg
      display block
      margin auto
    p
      line-height 20px
      color #0d85da
      text-align center
    .select-contract
      flex 1 1 50%
      font-size 14px
      line-height 28px
      >div
        width 100px
  .code-box
    flex 1 0 200px
    textarea
      height 130px

.deploy-cons
  p
    line-height 30px
  .label
    display block
    float left
    width 100px
    line-height 40px
  .input
    float left
    width calc(100% - 100px)
  margin-bottom 20px

.form-deploy
  margin-top -20px
  width 50%
  float left

.deploy-confirm
  margin-top -20px
  width 50%
  padding-left 60px
  box-sizing border-box
  float left
  &>div
    margin 20px 0
  .deploytx-info
    font-size 12px
    border solid 1px #ddd
    background-color #eee
    color #666
    border-radius 3px
    height 160px
    padding 9px
    box-sizing border-box

@media screen and (max-width: 960px)
  .code-input
    flex-direction column
    .compile-button
      margin 10px 0
      flex-direction row
      .loading
        >div
          margin 30px 0
      .select-contract
        >div
          margin 35px 0
          width 100%
  .form-deploy
    width 100%
  .deploy-confirm
    width 100%
    padding-left 0
</style>
