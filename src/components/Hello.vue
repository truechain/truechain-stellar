<template>
  <div id="hellopage">
    <div class="tc-card tc-hello-card">
      <h1>{{ $t('Hello.title') }}</h1>
      <p>{{ $t('Hello.welcome') }}</p>
      <p>Github: <a class="marked" target="_blank" href="https://github.com/truechain/truechain-stellar">https://github.com/truechain/truechain-stellar</a></p>
    </div>
    <div class="tc-card tc-hello-card">
      <h1 class="new">使用GreenBelt</h1>
      <p>
        从<a class="marked" href="https://chrome.google.com/webstore/detail/greenbelt/cgmhechlnfbnfcnomkmcillkgnipocfh" target="_blank">Chrome应用商店</a>安装
      </p>
      <div id="use-greenbelt" class="b-info" @click="loginWithGreenBelt">使用GreenBelt管理账户</div>
    </div>
    <signin-account @done="jumpToHomepage" @pass="jumpToHomepage"></signin-account>
    <create-account></create-account>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import LoadingAnimation from 'common/gui/Loading'
import CreateAccount from 'common/function/CreateAccount'
import SigninAccount from 'common/function/SigninAccount'
import routes from '@/router/routes.js'

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
      signUpWaiting: false
    }
  },
  mounted () {
    window.el = this
  },
  methods: {
    ...mapActions({
      useGreenBelt: 'useGreenBelt'
    }),
    jumpToHomepage () {
      this.$router.push(routes[0])
    },
    loginWithGreenBelt () {
      const provider = window.truechain
      if (provider && provider.isMetaMask) {
        this.useGreenBelt(provider).then(this.jumpToHomepage)
      } else {
        // TODO: notice
      }
    }
  },
  components: {
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
  padding 20px
  top 0
  left 0
  box-sizing border-box
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
</style>
