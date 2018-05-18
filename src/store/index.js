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
  web3: new Web3(networkSet[0].provider),
  providerName: networkSet[0].name
}

const mutations = {
  setWeb3Provider (state, config) {
    state.web3.setProvider(config.provider)
    state.providerName = config.name
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
