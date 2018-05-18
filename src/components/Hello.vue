<template>
  <div id="hellopage">
    <div class="tc-card tc-hello-card">
      <h1>Hello!</h1>
      <p>Welcome to Stellar. Currently it is a <span class="marked">test network</span> based on PBFT protocol and Fabric.</p>
      <p>Please <span class="blod">do not</span> upload <span class="marked">code or data that contains any private information</span> to the chain.</p>
    </div>
    <signin-account @done="jumpToHomepage" @pass="jumpToHomepage"></signin-account>
    <create-account></create-account>
  </div>
</template>

<script>
import LoadingAnimation from '@/components/common/gui/Loading'
import CreateAccount from '@/components/common/function/CreateAccount'
import SigninAccount from '@/components/common/function/SigninAccount'
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
    jumpToHomepage () {
      this.$router.push(routes[0])
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
.green-border
  border-left solid 6px #091
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
      margin 0
    .blod
      font-weight bold
      text-transform uppercase
      color #014676
    .marked
      color #014676
  input
    transition border-left .4s
.tc-hello-signup
  ul
    height 0px
    transition height .6s
    margin-left 10px
    overflow hidden
    box-sizing border-box
  li
    clear both
    line-height 40px
    margin-bottom 20px
    width 320px
    position relative
  input
    float right
  .msg
    color red
    font-size 12px
    margin-top 10px
    line-height 20px
  .back
    opacity .6
    cursor pointer
    transition opacity .4s
    font-size 14px
    line-height 20px
    &:hover
      opacity 1
  .sign-up
    line-height 40px
    font-weight bold
    font-size 1.6em
    transition .4s
    span
      cursor pointer
    & svg
      vertical-align bottom
    &:hover
      color #014676
  .sign-up-button
    font-size 1em
    transform translateX(10px)
  .get-invt-code
    display block
    position absolute
    bottom -30px
    right 0px
    font-size 12px
    color #014676
    text-decoration-line none
</style>
