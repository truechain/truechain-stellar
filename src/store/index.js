import Vue from 'vue'
import Vuex from 'vuex'
import accounts from './modules/accounts'
import eth from './modules/eth'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    accounts,
    eth
  },
  strict: debug
})
