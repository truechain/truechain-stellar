import staticContracts from 'static/contracts.json'

const DB_NAME = 'stellar'
const DB_VERSION = 1

// state
const state = {
  dbversion: DB_VERSION,
  db: null,
  contracts: [],
  state: false
}

// actions
const actions = {
  async initDB ({ state, dispatch }) {
    let upgradeneeded = false
    state.db = await new Promise(resolve => {
      const openRequest = indexedDB.open(DB_NAME, DB_VERSION)
      openRequest.onupgradeneeded = event => {
        const db = event.target.result
        db.createObjectStore('contract', { keyPath: 'name' })
        upgradeneeded = true
      }
      openRequest.onsuccess = () => {
        console.log('Use IndexDB:', openRequest.result.name, 'version:', openRequest.result.version)
        state.state = true
        resolve(openRequest.result)
      }
      openRequest.onerror = () => {
        console.warn('IndexDB could not be initialized')
        resolve(null)
      }
    })
    if (upgradeneeded) {
      await staticContracts.map(contract => {
        return dispatch('saveContract', contract)
      })
    }
    await dispatch('updateAllContracts')
  },
  async saveContract ({ state, dispatch }, { name, address, abi }) {
    const db = state.db
    if (!db || !(db instanceof IDBDatabase)) {
      return false
    }
    const res = new Promise(resolve => {
      const saveRequest = db.transaction(['contract'], 'readwrite')
        .objectStore('contract')
        .add({ name, address, abi })
      saveRequest.onsuccess = () => {
        resolve(true)
      }
      saveRequest.onerror = () => {
        resolve(false)
      }
    })
    if (res) {
      await dispatch('updateAllContracts')
    }
    return res
  },
  async updateContract ({ state, dispatch }, { name, address, abi }) {
    const db = state.db
    if (!db || !(db instanceof IDBDatabase)) {
      return false
    }
    const res = new Promise(resolve => {
      const delRequest = db.transaction(['contract'], 'readwrite')
        .objectStore('contract')
        .put({ name, address, abi })
      delRequest.onsuccess = () => {
        resolve(true)
      }
      delRequest.onerror = () => {
        resolve(false)
      }
    })
    if (res) {
      await dispatch('updateAllContracts')
    }
    return res
  },
  async removeContract ({ state, dispatch }, name) {
    const db = state.db
    if (!db || !(db instanceof IDBDatabase)) {
      return false
    }
    const res = new Promise(resolve => {
      const delRequest = db.transaction(['contract'], 'readwrite')
        .objectStore('contract')
        .delete(name)
      delRequest.onsuccess = () => {
        resolve(true)
      }
      delRequest.onerror = () => {
        resolve(false)
      }
    })
    if (res) {
      await dispatch('updateAllContracts')
    }
    return res
  },
  async updateAllContracts ({ state }) {
    const db = state.db
    if (!db || !(db instanceof IDBDatabase)) {
      return false
    }
    return new Promise(resolve => {
      const getRequest = db.transaction(['contract'])
        .objectStore('contract')
        .getAll()
      getRequest.onsuccess = event => {
        state.contracts = event.target.result
        resolve(event.target.result)
      }
      getRequest.onerror = () => {
        resolve(false)
      }
    })
  }
}

export default {
  state,
  actions
}
