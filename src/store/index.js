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
  languageTag: 'sc',
  web3: new Web3(networkSet[0].provider),
  providerTag: networkSet[0].tag,

  noticeBoxTimer: 0,
  noticeBox: null
}

const mutations = {
  setWeb3Provider (state, config) {
    state.web3 = new Web3(config.provider)
    state.providerTag = config.tag
  },
  initI18n (state, i18n) {
    state.i18n = i18n
  },
  setLanguage (state, tag) {
    state.i18n.locale = tag
    state.languageTag = tag
  },
  bindNoticeBox (state, el) {
    state.noticeBox = el
  }
}

const actions = {
  notice ({ state }, [color, text, time]) {
    let el = state.noticeBox
    if (!el) {
      return
    }
    let delay = 0
    if (state.noticeBoxTimer) {
      clearTimeout(state.noticeBoxTimer)
      delay = 300
    }
    switch (color) {
      case 'log':
        color = '#2fa4d9'
        break
      case 'warn':
        color = '#ed951f'
        break
      case 'error':
        color = '#d80315'
        break
    }
    el.style.transform = 'translateY(110%)'
    el.style.backgroundColor = color
    el.innerText = text
    setTimeout(() => {
      el.style.transform = 'translateY(0%)'
    }, delay)
    state.noticeBoxTimer = setTimeout(() => {
      el.style.transform = 'translateY(110%)'
      state.noticeBoxTimer = 0
    }, delay + time)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    accounts,
    eth
  },
  strict: debug
})
