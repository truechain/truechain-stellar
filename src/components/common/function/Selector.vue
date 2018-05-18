<template>
  <div class="selector">
    <span @click="toggleSelectMenu(true)">{{selected}}</span>
    <div class="ul-box" :class="{'ul-box-close': !selectMenuIsOpen}">
    <ul
      :style="{'transform': `translateY(${selectMenuIsOpen ? '0' : '-100%'})`}"
      :class="{'selector-scroll': needScroll}">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="changeSelect(item)">
        {{item}}
      </li>
      <li
        class="default-options"
        v-for="(item, index) in defaultOptions"
        :key="options.length + index"
        @click="changeDefaultSelect(item)">
        {{item}}
      </li>
      <li
        class="no-options"
        v-if="!length">
        No options
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  props: ['options', 'defaultSelect', 'defaultOptions'],
  data () {
    return {
      selected: this.defaultSelect,
      selectMenuIsOpen: false
    }
  },
  computed: {
    length () {
      let length = 0
      if (this.options && typeof this.options.length === 'number') {
        length += this.options.length
      }
      if (this.defaultOptions && typeof this.defaultOptions.length === 'number') {
        length += this.defaultOptions.length
      }
      return length
    },
    needScroll () {
      return this.length > 5
    }
  },
  watch: {
    options () {
      this.selected = this.defaultSelect
    }
  },
  mounted () {
    this.$el.querySelector('ul').addEventListener('mousewheel', this.onMouseWheel)
  },
  methods: {
    toggleSelectMenu (toOpen) {
      toOpen = toOpen === true
      this.selectMenuIsOpen = toOpen
      if (toOpen) {
        document.addEventListener('click', this.toggleSelectMenu, true)
      } else {
        document.removeEventListener('click', this.toggleSelectMenu, true)
      }
    },
    changeSelect (item) {
      this.selected = item
      this.$emit('change', item, false)
    },
    changeDefaultSelect (item) {
      this.selected = this.defaultSelect
      this.$emit('change', item, true)
    },
    onMouseWheel (e) {
      if (this.needScroll) {
        e.stopPropagation()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.selector
  position relative
  cursor pointer
  line-height 38px
  line-height calc(5em - 42px)
span
  height calc(5em - 40px)
  background-color #fff
  border solid 1px #ddd
  border-radius 3px
  padding 0 9px
  display block
  overflow hidden
  text-overflow ellipsis
  box-sizing border-box
.ul-box
  position absolute
  left 0
  top calc(5em - 38px)
  min-width 100%
  overflow hidden
  z-index 9
.ul-box-close
  height 0
ul
  background-color #fff
  border solid 1px #ddd
  border-radius 3px
  transform-origin 0% 0%
  transition .4s
li
  padding 0 9px
  width 100%
  margin 2px 0
  box-sizing border-box
  &:nth-child(even)
    background-color #fbfbfb
  &:first-child
    margin-top 0
  &:last-child
    margin-bottom 0
.default-options
  background-color #eee !important
.no-options
  color #bbb
  background-color #eee !important
.selector-scroll
  height 198px
  height calc(25em - 202px)
  overflow-y scroll
</style>
