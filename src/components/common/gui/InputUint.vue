<template>
  <div class="input-data-box">
    <input
      :class="{'input-error': isError}"
      @change="check"
      v-model="value"
      type="text">
    <div v-if="!value" class="input-default">{{type}}</div>
  </div>
</template>

<script>
import BN from 'bn.js'

window.BN = BN

export default {
  name: 'InputUint',
  props: ['type', 'index', 'isCorrect'],
  data () {
    return {
      value: '',
      isError: false
    }
  },
  computed: {
    size () {
      return parseInt(this.type.match(/uint([\d]+)/)[1])
    }
  },
  methods: {
    check () {
      if (/\[\]/.test(this.type)) {
        return this.checkAsArray()
      }
      const num10 = new BN(this.value, 10).toString(10)
      const num16 = '0x' + new BN(this.value.slice(2), 16).toString(16)
      const isCorrect = num10 === this.value || num16 === this.value
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, this.value)
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
