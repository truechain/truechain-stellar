class BaseTxObj {
  constructor (time, txData) {
    this.id = txData.hash
    this.from = txData.from
    this.sendTime = time
    this.height = -1

    this.finished = false
    this.receiptTime = 0
    this.error = null
  }
  onFail (time, error) {
    this.finished = true
    this.receiptTime = time
    this.error = error
  }
  onSuccess (time, txRecept) {
    this.finished = true
    this.receiptTime = time
    this.height = txRecept.blockNumber
  }
}

class TransferTxObj extends BaseTxObj {
  constructor (time, txData) {
    super(time, txData)
    this.to = txData.to
    this.value = txData.value
  }
}

class ContractTxObj extends BaseTxObj {
  constructor (time, txData) {
    super(time, txData)
    this.input = txData.input
    this.contract = ''
  }
  onSuccess (time, txRecept) {
    this.finished = true
    this.receiptTime = time
    this.contract = txRecept.contractAddress
    this.height = txRecept.blockNumber
  }
}

const state = {
  logs: [],
  monitoring: 0,
  pendingTxs: new Map()
}

const mutations = {
  afterTxSend (state, txData) {
    const time = new Date()
    if (txData.to) {
      const transferTxObj = new TransferTxObj(time, txData)
      state.logs.unshift(transferTxObj)
    } else {
      const contractTxObj = new ContractTxObj(time, txData)
      state.logs.unshift(contractTxObj)
    }
  },
  afterTxReceipt (state, txRecept) {
    const time = new Date()
    const tx = state.logs.find(item => item.id === txRecept.transactionHash)
    if (!tx) {
      return
    }
    if (txRecept.status) {
      tx.onSuccess(time, txRecept)
    } else {
      tx.onFail(time, 'Unknow Error')
    }
  },
  afterTxError (state, { txHash, errMsg }) {
    const time = new Date()
    const tx = state.logs.find(item => item.id === txHash)
    if (!tx) {
      return
    }
    tx.onFail(time, errMsg)
  }
}

const actions = {
  addPendingTx ({ state, dispatch }, [txHash, cb]) {
    state.pendingTxs.set(txHash, cb)
    if (!state.monitoring) {
      dispatch('startMonitoring')
    }
  },
  startMonitoring ({ state, dispatch }) {
    if (state.monitoring) {
      return false
    }
    state.monitoring = setInterval(() => {
      dispatch('processPendingTxs')
    }, 2000)
    return true
  },
  stopMonitoring ({ state }) {
    if (!state.monitoring) {
      return false
    }
    clearInterval(state.monitoring)
    state.monitoring = 0
    return true
  },
  processPendingTxs ({ state, rootState, commit }) {
    const web3 = rootState.web3
    state.pendingTxs.forEach((cb, txHash) => {
      web3.eth.getTransactionReceipt(txHash).then(receipt => {
        if (!receipt) {
          return
        }
        state.pendingTxs.delete(txHash)
        if (receipt.status) {
          commit('afterTxReceipt', receipt)
        } else {
          commit('afterTxError', {
            txHash: receipt.transactionHash,
            errMsg: 'Transactions fail when executed in EVM'
          })
        }
        if (typeof cb === 'function') {
          cb(receipt)
        }
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
