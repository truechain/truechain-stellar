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
  name: 'InputBool',
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
      const isCorrect = this.value === 'true' || this.value === 'false'
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, this.value === 'true')
    },
    checkAsArray () {
      let values = this.value.split(',')
      let isCorrect = true
      for (let i = 0; i < values.length; i++) {
        const value = values[i]
        values[i] = value === 'true'
        isCorrect = isCorrect && (value === 'true' || value === 'false')
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
