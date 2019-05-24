import Vue from 'vue'
import { mapMutations } from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import i18n from './language'
import './style.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  methods: {
    ...mapMutations([
      'initI18n'
    ])
  },
  created () {
    this.initI18n(i18n)
    this.$store.dispatch('initDB')
  },
  render: h => h(App)
}).$mount('#app')
