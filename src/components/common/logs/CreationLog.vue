<template>
  <div class="position-r">
    <div class="tc-card tx-log-card">
      <div class="tx-log-title">
        <span>{{ $t('Common.logs.contractCreation' )}} {{ data.id }}</span>
        <span class="tx-log-time">{{ sendTimeAb }}</span>
      </div>
      <hr>
      <div class="tx-log-content">
        <div><span>form</span>{{ data.from }}</div>
      </div>
    </div>
    <div v-if="data.error" class="b-error tx-log-result">
      <span>{{ $t('Common.logs.txError') }}</span>
      <span>{{ data.error }}</span>
      <span class="tx-log-time">{{ receiptTimeAb }}</span>
    </div>
    <div v-else-if="data.finished" class="b-normal tx-log-result">
      <span class="margin-right-1em">{{ $t('Common.logs.txSuccess') }}</span>
      <span class="margin-right-1em">{{ $t('Common.logs.blockHeight') }} {{ data.height }}</span>
      <span>{{ $t('Common.logs.contractAddress') }} {{ data.contract }}</span>
      <span class="tx-log-time">{{ receiptTimeAb }}</span>
    </div>
    <div v-else class="b-default tx-log-result">{{ $t('Common.waiting') }}...</div>
  </div>
</template>

<script>
export default {
  name: 'TxLog',
  props: ['data'],
  computed: {
    sendTime () {
      return this.data.sendTime.toString()
    },
    sendTimeAb () {
      return this.sendTime.match(/\d{2}:\d{2}:\d{2}/)[0]
    },
    receiptTime () {
      return this.data.receiptTime.toString()
    },
    receiptTimeAb () {
      if (this.receiptTime) {
        return this.receiptTime.match(/\d{2}:\d{2}:\d{2}/)[0]
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tx-log-card
  padding 0
  position relative
  z-index 2
  font-size 14px
  line-height 20px
  hr
    margin -1px 10px
.tx-log-title
  padding 10px
.tx-log-content
  padding 10px
  span
    display block
    width 50px
    float left
.tx-log-result
  color #fff
  margin-top -5px
  border-radius 0 0 5px 5px
  padding 10px 10px 5px
  position relative
  font-size 14px
  line-height 20px
  z-index 1
.tx-log-time
  float right
  font-size 12px
</style>
