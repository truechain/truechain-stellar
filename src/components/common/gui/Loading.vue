<template>
  <svg width="40" height="40">
    <circle cx="20" cy="20" r="12" class="loading"
    :style="{
      'stroke': color,
      'transform': `rotate(${rotateDeg}deg)`,
      'stroke-dashoffset': dashOffset
    }"
    :class="{
      'stop': !isActive
    }"/>
  </svg>
</template>

<script>
export default {
  name: 'AnimLoading',
  props: ['color', 'isActive'],
  data: () => {
    return {
      rotateDeg: 0,
      dashOffset: 0
    }
  },
  created () {
    requestAnimationFrame(this.render)
  },
  methods: {
    render () {
      if (this.isActive) {
        if ((this.rotateDeg += 4) > 360) {
          this.rotateDeg -= 360
        }
        if ((this.dashOffset -= 1) < -76) {
          this.dashOffset += 152
        }
      }
      requestAnimationFrame(this.render)
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading
  stroke black
  stroke-width 2
  fill none
  stroke-dasharray 76
  transform-origin 50% 50% 0
.stop
  stroke none !important
</style>
