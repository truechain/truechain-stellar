const state = {
  accounts: {},
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
    try {
      web3.eth.accounts.wallet.add(state.accounts[address.toLocaleLowerCase()])
    } catch (err) {
      throw err
    }
    setTimeout(() => {
      web3.eth.accounts.wallet.clear()
    }, 10000)
    return true
  }
}

// mutations
const mutations = {
  saveAccounts (state, accounts) {
    const tempAccounts = {}
    for (let i = 0; i < accounts.length; i++) {
      const el = accounts[i]
      const address = el.address.toLocaleLowerCase()
      tempAccounts[address] = el
      if (state.addresses.indexOf(address) === -1) {
        state.addresses.push(address)
      }
    }
    state.latestAccounts = state.addresses[state.addresses.length - 1]
    state.accounts = {
      ...state.accounts,
      ...tempAccounts
    }
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
