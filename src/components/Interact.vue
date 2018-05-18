<template>
  <div id="interact" :style="{transform: `translateY(${pageTranslateY}px)`}">
    <div class="tc-card">
      <div class="tc-title">Interact Contract</div>
      <div class="contarct-info">
        <div class="left-part">
          <p class="title">Contract</p>
          <selector
            :options="contractNames"
            :defaultOptions="contractNamesDefaultOptions"
            @change="selectContract">
          </selector>
        </div>
        <div class="right-part">
          <p class="title">Address</p>
          <input
            :class="{'input-active': !haveSelectedContract}"
            :disabled="haveSelectedContract"
            v-model="contract.address"
            type="text">
        </div>
        <div class="clear"></div>
        <p class="title">Iterface JSON</p>
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
          <p class="title">Interface</p>
          <selector
            :options="interfaceNames"
            @change="selectInterface">
          </selector>
          <div
            class="input-data-boxs"
            v-for="(item, index) in inputInterfaceData"
            :key="index">
            <span>{{item.name.slice(1)}}</span>
            <interface-data
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
            <div>Send</div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import web3 from '@/api-config/web3'
import { mapState, mapActions } from 'vuex'

import Selector from '@/components/common/function/Selector'
import SetTxConfig from '@/components/common/function/SetTxConfig'
import contracts from '@/../static/contracts.json'

import InputAddress from '@/components/common/gui/InputAddress'
import InputUint from '@/components/common/gui/InputUint'

const contractNamesDefaultOptions = ['Custom']
const contractNames = contracts.map(contract => {
  return contract.name
})

const InterfaceData = Vue.component('interface-data', {
  functional: true,
  render (createElement, context) {
    function getComponent (type) {
      switch (true) {
        case /address/.test(type):
          return InputAddress
        case /uint/.test(type):
          return InputUint
        default:
          return InputAddress
      }
    }
    const component = getComponent(context.props.type)
    return createElement(component, context.data)
  }
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
      contractNamesDefaultOptions,
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
      txInfo: 'Tx Info',
      pageTranslateY: 0,
      height: 0
    }
  },
  computed: {
    ...mapState([
      'eth'
    ]),
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
      if (this.interfacesList.indexOf(this.focusInterface) === -1) {
        this.focusInterface = {}
      }
    }
  },
  created () {
    this.$emit('routerinit', this)
  },
  mounted () {
    this.height = this.$el.getBoundingClientRect().height
    this.$el.addEventListener('mousewheel', this.onMousewheel)
    window.addEventListener('resize', this.updateSize)
  },
  methods: {
    ...mapActions([
      'pushAccountToWallet'
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
        this.focusContract = new web3.eth.Contract(interfacesJSON)
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
      this.txInfo = 'Tx Info'
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
      try {
        this.focusContract.methods[this.focusInterface.name](...this.inputArguments).estimateGas().then(this.setComputedGas)
      } catch (err) {
        this.setComputedGas('')
      }
    },
    onNext (options) {
      web3.eth.getTransactionCount(options.from, 'pending').then(res => {
        this.txConfig = { nonce: res, ...options }
        this.txInfo = 'Tx Info:<br>'
        this.txInfo += `nonce: ${res} --- OK<br>`
        this.txInfo += `from: ${options.from} --- OK<br>`
        const inputGasPrice = Number(web3.utils.fromWei(options.gasPrice, 'Gwei'))
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
        tx.call().then(console.log)
      } else {
        try {
          this.pushAccountToWallet(this.txConfig.from)
        } catch (err) {
          throw err
        }
        tx.send(this.txConfig)
          .then(console.log)
          .catch(err => {
            if (err) {
              console.error(err.stack)
            }
          })
        this.txConfig = {}
      }
    }
  },
  components: {
    Selector,
    SetTxConfig,
    InterfaceData
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
  span
    display block
    margin-top 8px
    font-size 14px
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
