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
  name: 'InputBytes',
  props: ['type', 'index', 'isCorrect'],
  data () {
    return {
      value: '',
      isError: false
    }
  },
  computed: {
    size () {
      const matching = this.type.match(/bytes([\d]+)/)
      if (matching) {
        return parseInt(matching[1])
      } else {
        return 1
      }
    }
  },
  methods: {
    check () {
      if (/\[\]/.test(this.type)) {
        return this.checkAsArray()
      }
      const matching = this.value.match(/^0x([a-f,A-F,0-9]*$)/)
      let isCorrect = true
      if (matching) {
        const l = matching[1].length
        isCorrect = l % 2 === 0 && l / 2 <= this.size
      } else {
        isCorrect = false
      }
      this.isError = Boolean(!isCorrect && this.value)
      this.$emit('update:isCorrect', isCorrect)
      this.$emit('pushData', this.index, this.value)
    },
    checkAsArray () {
      let values = this.value.split(',')
      let isCorrect = true
      for (let i = 0; i < values.length; i++) {
        const value = values[i]
        const matching = value.match(/^0x([a-f,A-F,0-9]*$)/)
        if (matching) {
          const l = matching[1].length
          isCorrect = l % 2 === 0 && l / 2 <= this.size
        } else {
          isCorrect = false
        }
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
