<template>
  <div id="tc-log">
    <ul class="tc-log-list">
      <li v-for="(item, key) in logs" :key="key">
        <log-card :data="item" />
      </li>
      <!-- <li>
        <div class="no-data">No Data</div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import TxLog from '@/components/common/logs/TxLog'

const LogCard = Vue.component('log-card', {
  functional: true,
  render (createElement, context) {
    function getComponent (data) {
      return TxLog
    }
    const component = getComponent(context.props.data)
    return createElement(component, context.data)
  }
})

export default {
  name: 'Log',
  data () {
    return {
      testData: {
        error: null,
        finished: false,
        from: '0x7e5f4552091a69125d5dfcb7b8c2659029395bdf',
        id: '0xb06375b13415bf2eeba7fc455370cc7a403b884e7a78241673f4898a7fe4809c',
        receiptTime: 0,
        sendTime: new Date(),
        to: '0x7e5f4552091a69125d5dfcb7b8c2659029395bdf',
        value: '0'
      }
    }
  },
  computed: {
    ...mapState({
      'logs': state => state.log.logs
    })
  },
  components: {
    LogCard
  }
}
</script>

<style lang="stylus" scoped>
#tc-log
  padding 30px
.tc-log-list li
  margin 10px
</style>
