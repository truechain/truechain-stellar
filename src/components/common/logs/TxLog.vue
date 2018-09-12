<template>
  <div class="position-r">
    <div class="tc-card tx-log-card">
      <div class="tx-log-title">交易 {{data.id}}</div>
      <hr>
      <div class="tx-log-content">
        <div><span>form</span>{{data.from}}</div>
        <div><span>value</span>{{data.value}}</div>
        <div><span>to</span>{{data.to}}</div>
      </div>
    </div>
    <div v-if="data.error" class="b-error tx-log-result">交易失败</div>
    <div v-else-if="data.finished" class="b-normal tx-log-result">交易成功</div>
    <div v-else class="b-default tx-log-result">等待中</div>
    <div class="tx-log-time">{{sendTimeAb}}</div>
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
  z-index 1
.tx-log-time
  position absolute
  left 10px
  top -18px
  font-size 12px
</style>
