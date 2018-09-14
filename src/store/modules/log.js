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
  logs: []
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
      tx.onFail(time, true)
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

export default {
  namespaced: true,
  state,
  // getters,
  // actions,
  mutations
}
