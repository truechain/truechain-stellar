<template>
  <div class="tc-card">
    <div class="tc-title">{{ $t('SigninAccount.title') }}</div>
      <div class="tc-form-line">
        <span>{{ $t('SigninAccount.privateKey') }}</span><input type="password" v-model="privateKey">
      </div>
      <div class="signin-account-selkey" :class="{'active': inputPassword}">
        <span>{{ $t('SigninAccount.select') }}</span>
        <input type="file" @change="checkKeystore">
      </div>
      <div class="tc-form-line" v-if="inputPassword">
        <span>{{ $t('Common.password') }}</span><input type="password" v-model="password">
      </div>
      <div class="signin-account-buttons">
        <div @click="decrypt" :class="{'button-active': password || privateKey}" class="signin-account-decript">
          <div>{{ $t('Common.decrypt') }}</div>
        </div>
        <div @click="pass" class="signin-account-pass">{{ $t('Common.skip') }}</div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'SigninAccount',
  data () {
    return {
      keystore: null,
      password: '',
      privateKey: '',
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
    ...mapActions([
      'notice'
    ]),
    checkKeystore (e) {
      const files = e.target.files
      if (files && files.length) {
        const file = files[0]
        if (file.size > 200000) {
          this.notice(['error', this.$t('Common.notice.ksTooLarge'), 5000])
          return
        }
        const reader = new FileReader()
        const self = this
        reader.onload = function () {
          let data = null
          try {
            data = JSON.parse(this.result)
          } catch (err) {
            self.notice(['error', this.$t('Common.notice.ksParseErr'), 5000])
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
      if (this.privateKey) {
        try {
          const account = this.accounts.privateKeyToAccount(this.privateKey)
          this.saveAccounts([account])
          this.$emit('done')
        } catch (err) {
          this.notice(['error', this.$t('Common.notice.ksPkErr') + (err.message || err), 5000])
        }
      } else {
        try {
          const account = this.accounts.decrypt(this.keystore, this.password)
          this.saveAccounts([account])
          this.$emit('done')
        } catch (err) {
          this.notice(['error', this.$t('Common.notice.ksPwErr') + (err.message || err), 5000])
        }
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
