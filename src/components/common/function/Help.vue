<template>
  <div>
    <div class="help" @mouseenter="mouseenter" @mouseleave="mouseleave">?</div>
    <div class="notice" :style="{
      'width': `${hover ? width + 10 : 0}px`,
      'opacity': hover ? 1 : 0
    }">
      <span></span>
      <div :style="{'width': `${width}px`}" v-html="notice"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help',
  props: ['notice', 'width'],
  data () {
    return {
      hover: false
    }
  },
  methods: {
    mouseenter () {
      this.hover = true
    },
    mouseleave () {
      this.hover = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.help
  position absolute
  font-weight 800
  top 8px
  right 8px
  width 20px
  height 20px
  line-height 22px
  border solid 2px #fff2d6
  color #ffb800
  border-radius 100%
  text-align center
  cursor pointer
  transition background-color .6s
  background-color #fff
  &:hover
    background-color #fff2d6
.notice
  position absolute
  border-radius 3px
  font-size 14px
  line-height 20px
  width 0px
  left 30px
  top 20px
  opacity 0
  transform translateY(-50%)
  overflow hidden
  transition width .2s linear, opacity .4s
  span
    height 0
    width 0
    border-right solid 8px #fff2d6
    border-top solid 6px transparent
    border-bottom solid 6px transparent
    position absolute
    top 50%
    left 2px
    transform translate3d(0, -50%, 0)
  div
    padding 8px
    box-sizing border-box
    background-color #fff2d6
    color #0008
    margin-left 10px
</style>
