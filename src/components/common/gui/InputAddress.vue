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
      this.isError = !this.isAddress(this.value) && this.value
      this.$emit('update:isCorrect', !this.isError && this.value !== '')
      this.$emit('pushData', this.index, this.value)
    }
  }
}
</script>
