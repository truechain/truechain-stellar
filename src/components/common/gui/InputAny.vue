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
export default {
  name: 'InputAny',
  props: ['type', 'index', 'isCorrect'],
  data () {
    return {
      value: '',
      isError: false
    }
  },
  methods: {
    check () {
      if (/\[\]/.test(this.type)) {
        return this.checkAsArray()
      }
      const isCorrect = true
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, this.value)
    },
    checkAsArray () {
      let values = this.value.split(',')
      let isCorrect = true
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, values)
    }
  }
}
</script>
