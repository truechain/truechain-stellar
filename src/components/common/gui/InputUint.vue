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
      const num10 = new BN(this.value, 10).toString(10)
      const num16 = '0x' + new BN(this.value.slice(2), 16).toString(16)
      this.isError = !(num10 === this.value || num16 === this.value) && this.value
      this.$emit('update:isCorrect', !this.isError && this.value !== '')
      this.$emit('pushData', this.index, this.value)
    }
  }
}
</script>
