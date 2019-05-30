<template>
  <div id="hellopage">
    <div :style="{transform: `translateY(${pageTranslateY}px)`}">
      <div class="tc-card tc-hello-card">
        <h1>{{ $t('Hello.title') }}</h1>
        <p>{{ $t('Hello.welcome') }}</p>
        <p>Github: <a class="marked" target="_blank" href="https://github.com/truechain/truechain-stellar">https://github.com/truechain/truechain-stellar</a></p>
      </div>
      <div class="tc-card tc-hello-card">
        <h1 class="new">{{ $t('GreenBelt.title') }}</h1>
        <p>
          <a class="marked" :href="greenbelt" target="_blank">{{ $t('GreenBelt.download') }}</a>
        </p>
        <div id="use-greenbelt" class="b-info" @click="loginWithGreenBelt">
          {{ $t('GreenBelt.start') }}
          <div class="greenbelt-version-notice" @click.stop>
            <notice :notice="$t('GreenBelt.versionNotice')" :width="240"></notice>
          </div>
        </div>
      </div>
      <signin-account @done="jumpToHomepage" @pass="jumpToHomepage"></signin-account>
      <create-account></create-account>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Notice from 'common/function/Notice'
import LoadingAnimation from 'common/gui/Loading'
import CreateAccount from 'common/function/CreateAccount'
import SigninAccount from 'common/function/SigninAccount'
import routes from '@/router/routes.js'

const greenbelt = 'https://chrome.google.com/webstore/detail/greenbelt/cgmhechlnfbnfcnomkmcillkgnipocfh'

export default {
  name: 'hello',
  data: () => {
    return {
      name: '',
      nameIsOk: false,
      password: '',
      passwordIsOk: false,
      repeat: '',
      repeatIsOk: false,
      passwordCheckMsg: '',
      repeatCheckMsg: '',
      invtCode: '',
      isOpen: false,
      signUpWaiting: false,

      greenbelt,
      pageTranslateY: 0,
      height: 0
    }
  },
  mounted () {
    this.height = this.$el.getBoundingClientRect().height
    this.$el.addEventListener('mousewheel', this.onMousewheel)
  },
  methods: {
    ...mapActions([
      'useGreenBelt',
      'notice'
    ]),
    jumpToHomepage () {
      this.$router.push(routes[0])
    },
    loginWithGreenBelt () {
      const provider = window.truechain
      if (provider && provider.isMetaMask) {
        this.useGreenBelt(provider).then(this.jumpToHomepage)
      } else {
        this.notice(['error', this.$t('GreenBelt.notfound'), 10000])
      }
    },
    onMousewheel (e) {
      if (e && e.cancelable) {
        this.updateSize()
      }
      if (e && e.target && e.target.nodeName === 'TEXTAREA') {
        return
      }
      if (e) {
        this.pageTranslateY += e.deltaY > 0 ? -90 : 90
      }
      if (this.pageTranslateY > 0) {
        this.pageTranslateY = 0
      }
      let contentH = window.innerHeight - 160
      if (this.height + this.pageTranslateY < contentH) {
        this.pageTranslateY = Math.min(contentH - this.height, 0)
      }
    },
    updateSize () {
      this.height = this.$el.getBoundingClientRect().height
      this.onMousewheel()
    }
  },
  components: {
    Notice,
    LoadingAnimation,
    CreateAccount,
    SigninAccount
  }
}
</script>

<style lang="stylus" scoped>
#hellopage
  position absolute
  width 100%
  height 100%
  padding 20px
  top 0
  left 0
  box-sizing border-box
  overflow hidden
  &>div
    margin 10px
  .tc-card
    margin 10px
    line-height 1.5em
    h1
      font-size 1.6em
      line-height 40px
      margin 0 0 20px
    .blod
      font-weight bold
      text-transform uppercase
      color #014676
    .marked
      color #014676
#use-greenbelt
  margin 20px 0
  height 40px
  width 320px
  text-align center
  line-height 40px
  color #fff
  border-radius 3px
  cursor pointer
  position relative
.greenbelt-version-notice
  position absolute
  right -40px
  top 0
  width 40px
  height 40px
</style>
