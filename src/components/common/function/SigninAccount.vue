<template>
  <div class="tc-card">
    <div class="tc-title">Sign in with Account</div>
      <div class="signin-account-selkey" :class="{'active': inputPassword}">
        <span>{{buttonText}}</span>
        <input type="file" @change="checkKeystore">
      </div>
      <div class="tc-form-line" v-if="inputPassword">
        <span>Password</span><input type="password" v-model="password">
      </div>
      <div class="signin-account-buttons">
        <div @click="decrypt" :class="{'button-active': password}" class="signin-account-decript">
          <div>Decrypt</div>
        </div>
        <div @click="pass" class="signin-account-pass">Sign in later</div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SigninAccount',
  data () {
    return {
      keystore: null,
      buttonText: 'Select wallet flie',
      password: '',
      accountsCount: 1,
      inputPassword: false
    }
  },
  computed: {
    ...mapState({
      'accounts': state => state.web3.eth.accounts
    })
  },
  methods: {
    ...mapMutations([
      'saveAccounts'
    ]),
    checkKeystore (e) {
      const files = e.target.files
      if (files && files.length) {
        const file = files[0]
        if (file.size > 200000) {
          console.log('to large')
          return
        }
        const reader = new FileReader()
        const self = this
        reader.onload = function () {
          let data = null
          try {
            data = JSON.parse(this.result)
          } catch (err) {
            console.log(err)
            return
          }
          self.keystore = data
          let count = 1
          if (data.length) {
            count = data.length
          }
          self.buttonText = `${count} Account${count > 1 ? 's are' : ' is'} waiting to be decrypted`
          self.inputPassword = true
        }
        reader.readAsText(file)
      }
    },
    decrypt () {
      try {
        const account = this.accounts.decrypt(this.keystore, this.password)
        this.saveAccounts([account])
        this.$emit('done')
      } catch (err) {
        console.log(err.message)
      }
    },
    pass () {
      this.$emit('pass')
    }
  }
}
</script>

<style lang="stylus" scoped>
.signin-account-selkey
  margin 20px 0
  width 320px
  height 40px
  position relative
  border-radius 3px
  background-color #0d85da
  text-align center
  line-height 40px
  color #fff
  transition background-color .4s
  input
    display block
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    opacity 0
    cursor pointer
.active
  background-color #01ad14
.signin-account-buttons
  margin 20px 0 0
  height 40px
  div
    border-radius 3px
    color #fff
    float left
    width 150px
    height 40px
    text-align center
    line-height 40px
  div:first-child
    margin-right 20px
.signin-account-decript
  background-color #0072c1
  cursor default
  div
    border-radius 3px
    transition background-color .4s, transform .4s
    background-color #bbb
.button-active
  cursor pointer
  div
    background-color #0d85da
    transform translateY(-10px)
    &:hover
      transform translateY(-6px)
.signin-account-pass
  cursor pointer
  background-color #0d85da
</style>
