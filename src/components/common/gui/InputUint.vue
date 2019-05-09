<template>
  <div class="input-data-box">
    <input
      :class="{'input-error': isError}"
      @change="delayCheck"
      @focus="toggle(true)"
      @blur="toggle(false)"
      v-model="value"
      type="text">
    <div v-if="!value" class="input-default">{{type}}</div>
    <transition name="fade">
      <div class="input-multiple"
        v-if="focused && value.length < 16"
        @click="multiple">x 10<sup>18</sup></div>
    </transition>
  </div>
</template>

<script>
import BN from 'bn.js'

export default {
  name: 'InputUint',
  props: ['type', 'index', 'isCorrect'],
  data () {
    return {
      value: '',
      isError: false,
      focused: false,
      sto: 0
    }
  },
  computed: {
    size () {
      return parseInt(this.type.match(/int([\d]+)/)[1])
    }
  },
  methods: {
    check () {
      if (/\[\]/.test(this.type)) {
        return this.checkAsArray()
      }
      let isCorrect = false
      if (this.value.substr(0, 2) === '0x') {
        const num16 = '0x' + new BN(this.value.slice(2), 16).toString(16)
        isCorrect = num16 === this.value
      } else {
        const num10 = new BN(this.value, 10).toString(10)
        isCorrect = num10 === this.value
      }
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, this.value)
    },
    delayCheck () {
      if (this.sto) {
        clearTimeout(this.sto)
      }
      this.sto = setTimeout(() => {
        this.check()
      }, 150)
    },
    toggle (focused) {
      this.focused = focused
    },
    multiple () {
      let numI = ''
      let numD = ''
      if (this.value.substr(0, 2) === '0x') {
        numI = new BN(this.value.slice(2), 16).toString(10)
      } else if (this.value.includes('.')) {
        const number = this.value.split('.')
        if (number.length !== 2) {
          return
        }
        numI = number[0]
        numD = number[1]
      } else {
        numI = this.value
      }
      if (/\D/.test(numI) || /\D/.test(numD)) {
        return
      }
      this.value = (numI + numD.padEnd(18, '0')).replace(/^0+(\d)/, '$1')
      this.delayCheck()
    },
    checkAsArray () {
      let values = this.value.split(',')
      let isCorrect = true
      for (let i = 0; i < values.length; i++) {
        const el = values[i]
        const num10 = new BN(el, 10).toString(10)
        const num16 = '0x' + new BN(el.slice(2), 16).toString(16)
        isCorrect = isCorrect && (num10 === el || num16 === el)
        if (!isCorrect) {
          break
        }
      }
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, values)
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-multiple
  position absolute
  font-size 14px
  right 10px
  top 50%
  cursor pointer
  z-index 10
  color #0fa9a2
  background-color #fff
  transform translateY(-50%)
  opacity .6
  transition opacity .3s
  &:hover
    opacity 1

.fade-enter, .fade-leave-to
  opacity 0 !important
</style>
