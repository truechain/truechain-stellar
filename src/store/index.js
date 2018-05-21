import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3'

import accounts from './modules/accounts'
import eth from './modules/eth'
import networkSet from 'static/network.json'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
const debug = false

const state = {
  i18n: null,
  languageTag: 'en',
  web3: new Web3(networkSet[3].provider),
  providerTag: networkSet[3].tag
}

const mutations = {
  setWeb3Provider (state, config) {
    state.web3.setProvider(config.provider)
    state.providerTag = config.tag
  },
  initI18n (state, i18n) {
    state.i18n = i18n
  },
  setLanguage (state, tag) {
    state.i18n.locale = tag
    state.languageTag = tag
  }
}
export default new Vuex.Store({
  state,
  mutations,
  modules: {
    accounts,
    eth
  },
  strict: debug
})
