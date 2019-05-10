const state = {
  accounts: new Map(),
  addresses: [],
  accountsDialogIsOpen: false,
  latestAccounts: ''
}

// getters
const getters = {
  allAccounts: state => state.addresses,
  accountsCount: state => state.addresses.length,
  signedTransaction: state => (address, rawTx) => {
    const account = state.accounts[address.toLocaleLowerCase()]
    if (!account) {
      throw new Error(`Address: ${address} is not authorized`)
    } else {
      return account.signTransaction(rawTx)
    }
  }
}

// actions
const actions = {
  pushAccountToWallet ({ state, rootState }, address) {
    const web3 = rootState.web3
    const account = state.accounts.get(address.toLowerCase())
    if (account) {
      web3.eth.accounts.wallet.add(account)
      setTimeout(() => {
        web3.eth.accounts.wallet.clear()
      }, 10000)
    } else {
      return false
    }
    return true
  },
  async signTx ({ state, rootState }, txConfig) {
    const web3 = rootState.web3
    const from = txConfig.from.toLowerCase()
    const account = state.accounts.get(from.toLowerCase())
    if (!rootState.useGreenBelt && !account) {
      return false
    }
    if (!rootState.chainId) {
      rootState.chainId = await web3.eth.net.getId()
    }
    const tx = Object.assign({
      chainId: rootState.chainId
    }, txConfig)
    const { rawTransaction } = rootState.useGreenBelt ?
      await web3.eth.accounts.signTransaction(tx, web3.currentProvider) :
      await account.signTransaction(tx)
    return rawTransaction
  }
}

// mutations
const mutations = {
  saveAccounts (state, accounts) {
    const tempAccounts = {}
    for (let i = 0; i < accounts.length; i++) {
      const account = accounts[i]
      const address = account.address.toLocaleLowerCase()
      tempAccounts[address] = account
      if (state.addresses.indexOf(address) === -1) {
        state.addresses.push(address)
      }
      state.accounts.set(address, account)
    }
    state.latestAccounts = state.addresses[state.addresses.length - 1]
  },
  toAddAccounts (state) {
    state.accountsDialogIsOpen = true
  },
  endAddAccounts (state) {
    state.accountsDialogIsOpen = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
