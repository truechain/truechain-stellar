import web3 from '@/api-config/web3'

const state = {
  gasPrice: '20000000000',
  blockNumber: 0,
  MAX_GAS_PRICE_GWEI: 100,
  MIN_GAS_PRICE_GWEI: 1
}

// getters
// const getters = {
//   asd: state => state.addresses
// }

// actions
const actions = {
  updateEthereumInfo ({ commit, state }) {
    return Promise.all([
      web3.eth.getGasPrice().then(res => { commit('setGasPrice', res) }),
      web3.eth.getBlockNumber().then(res => { commit('setBlockNumber', res) })
    ])
  }
}

// mutations
const mutations = {
  setGasPrice (state, price) {
    state.gasPrice = price
  },
  setBlockNumber (state, number) {
    state.blockNumber = number
  }
}

export default {
  state,
  // getters,
  actions,
  mutations
}
