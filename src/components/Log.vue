<template>
  <div id="tc-log" :style="{transform: `translateY(${pageTranslateY}px)`}">
    <ul class="tc-log-list">
      <li v-for="(item, key) in logs" :key="key">
        <log-card :data="item" />
      </li>
      <li v-if="logs.length === 0">
        <div class="no-data">No Data</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import TxLog from '@/components/common/logs/TxLog'
import CreationLog from '@/components/common/logs/CreationLog'

const LogCard = Vue.component('log-card', {
  functional: true,
  render (createElement, context) {
    function getComponent (data) {
      if (data.to) {
        return TxLog
      } else {
        return CreationLog
      }
    }
    const component = getComponent(context.props.data)
    return createElement(component, context.data)
  }
})

export default {
  name: 'Log',
  data () {
    return {
      pageTranslateY: 0,
      height: 0
    }
  },
  computed: {
    ...mapState({
      'logs': state => state.log.logs
    })
  },
  created () {
    this.$emit('routerinit', this)
  },
  mounted () {
    this.height = this.$el.getBoundingClientRect().height
    this.$el.addEventListener('mousewheel', this.onMousewheel)
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
  margin 10px 10px 20px
</style>
