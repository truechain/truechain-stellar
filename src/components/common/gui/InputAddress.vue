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
import { mapState } from 'vuex'

export default {
  name: 'InputAddress',
  props: ['type', 'index', 'isCorrect'],
  data () {
    return {
      value: '',
      isError: false
    }
  },
  computed: {
    ...mapState({
      'isAddress': state => state.web3.utils.isAddress
    })
  },
  methods: {
    check () {
      if (/\[\]/.test(this.type)) {
        return this.checkAsArray()
      }
      const isCorrect = this.isAddress(this.value)
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, this.value)
    },
    checkAsArray () {
      let values = this.value.split(',')
      let isCorrect = true
      for (let i = 0; i < values.length; i++) {
        const el = values[i]
        isCorrect = isCorrect && this.isAddress(el)
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
