// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { mapMutations } from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import i18n from './language'
import './style.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  methods: {
    ...mapMutations([
      'initI18n'
    ])
  },
  created () {
    this.initI18n(i18n)
  },
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
