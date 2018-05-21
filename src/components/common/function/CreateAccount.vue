<template>
  <div class="tc-card">
    <div class="tc-title">{{ $t('CreateAccount.title') }}</div>
    <div class="tc-form-line">
      <span>{{ $t('Common.password') }}</span>
      <input type="password" v-model="inputPassword" :class="{'green-border': passwordIsOk}" @change="onInputChainge">
      <p class="create-account-msg">{{passwordCheckMsg}}</p>
      <div class="create-account-help">
        <help :notice="$t('CreateAccount.passwordHelp')" :width="200"></help>
      </div>
    </div>
    <div class="tc-form-line">
      <span>{{ $t('Common.repeat') }}</span>
      <input type="password" v-model="repeatPassword" :class="{'green-border': repeatIsOk}" @change="onRepeatChainge">
      <p class="create-account-msg">{{repeatCheckMsg}}</p>
    </div>
    <div class="create-account-submit"
      :class="{'create-account-submit-acitve': repeatIsOk && passwordIsOk}"
      @click="createAccounts">{{ $t('CreateAccount.submit') }}</div>
    <div class="create-account-download-box">
      <a class="create-account-download"
        :class="{ 'create-account-download-active': exportFinish }"
        :href="exportJSON"
        :download="exportName">
        <div>{{exportFinish ? $t('CreateAccount.canDownload') : $t('CreateAccount.noKeystore')}}</div>
      </a>
      <div class="create-account-notice">
        <notice :notice="$t('CreateAccount.keystoreNotice')" :width="400"></notice>
      </div>
    </div>
    <p class="create-account-address">{{address}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import passwordStrength from 'owasp-password-strength-test'

import Help from '@/components/common/function/Help'
import Notice from '@/components/common/function/Notice'

// const passwordHelp = 'Do NOT forget to save this'
// const keystoreNotice = `**Do not lose it!** It cannot be recovered if you lose it.<br>
// **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.<br>
// **Make a backup!** Secure it like the millions of dollars it may one day be worth.`

export default {
  name: 'CreateAccount',
  data () {
    return {
      inputPassword: '',
      passwordIsOk: false,
      passwordCheckMsg: '',
      repeatPassword: '',
      repeatIsOk: false,
      repeatCheckMsg: '',
      exportJSON: 'javascript:;',
      exportName: '',
      exportFinish: false,
      address: ''
    }
  },
  computed: {
    ...mapState({
      'accounts': state => state.web3.eth.accounts
    })
  },
  methods: {
    createAccounts () {
      if (this.passwordIsOk && this.repeatPassword) {
        this.address = ''
        this.exportFinish = false
        let tempAccounts = this.accounts.create()
        const keystore = tempAccounts.encrypt(this.inputPassword)
        const date = new Date()
        this.exportName = `${date.toUTCString().replace(/[\W]+/g, '-')}--${keystore.address}.json`
        let blob = new Blob([JSON.stringify(keystore)])
        this.exportJSON = URL.createObjectURL(blob)
        this.exportFinish = true
        this.address = `Address 0x${keystore.address}`
        tempAccounts = null
      }
    },
    onInputChainge () {
      if (this.repeatPassword !== '') {
        this.onRepeatChainge()
      }
      this.passwordIsOk = false
      let info = passwordStrength.test(this.inputPassword)
      if (info.strong) {
        this.passwordCheckMsg = ''
        this.passwordIsOk = true
      } else if (info.requiredTestErrors.length) {
        this.passwordCheckMsg = info.requiredTestErrors[0]
      } else {
        this.passwordCheckMsg = info.optionalTestErrors[0]
      }
    },
    onRepeatChainge () {
      this.repeatIsOk = false
      if (this.inputPassword === this.repeatPassword) {
        this.repeatCheckMsg = ''
        if (this.repeatPassword) {
          this.repeatIsOk = true
        }
      } else {
        this.repeatCheckMsg = 'The password entered twice is inconsistent.'
      }
    }
  },
  components: {
    Help,
    Notice
  }
}
</script>

<style lang="stylus" scoped>
.green-border
  border-left solid 6px #091
.create-account-submit
  margin 20px 0
  height 40px
  width 320px
  text-align center
  line-height 40px
  color #fff
  border-radius 3px
  background-color #bbb
  transition background-color .4s
  cursor default
.create-account-submit-acitve
  background-color #0d85da
  cursor pointer
.create-account-msg
  font-size 12px
  text-align right
  line-height 20px
  color #f00
.create-account-download-box
  position relative
  width 320px
.create-account-download
  display block
  height 40px
  width 320px
  text-align center
  line-height 40px
  color #fff
  border-radius 3px
  background-color #0072c1
  transition background-color .4s
  text-decoration none
  cursor default
  div
    border-radius 3px
    transition background-color .4s, transform .4s
    background-color #bbb
.create-account-download-active
  cursor pointer
  div
    background-color #0d85da
    transform translateY(-10px)
    &:hover
      transform translateY(-6px)
.create-account-address
  font-size 12px
  color #014676
  line-height 20px
  height 20px
  clear both
.create-account-help
  position absolute
  top 0
  right -40px
  width 40px
  height 40px
.create-account-notice
  position absolute
  right -40px
  top 0
  width 40px
  height 40px
</style>
