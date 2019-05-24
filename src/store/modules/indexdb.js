const DB_NAME = 'stellar'
const DB_VERSION = 1

// state
const state = {
  dbversion: DB_VERSION,
  db: null
}

// actions
const actions = {
  async initDB ({ state }) {
    state.db = await new Promise(resolve => {
      const openRequest = indexedDB.open(DB_NAME, DB_VERSION)
      openRequest.onupgradeneeded = event => {
        const db = event.target.result
        db.createObjectStore('contract', { autoIncrement: true })
          .createIndex('name', 'name', { unique: true })
      }
      openRequest.onsuccess = () => {
        console.log('use IndexDB', openRequest.result.name, 'version', openRequest.result.version)
        resolve(openRequest.result)
      }
      openRequest.onerror = () => {
        console.warn('IndexDB could not be initialized')
        resolve(null)
      }
    })
  },
  async saveContract ({ state }, { name, address, abi }) {
    const db = state.db
    if (!db || !(db instanceof IDBDatabase)) {
      return false
    }
    return new Promise(resolve => {
      const saveRequest = db.transaction(['contract'], 'readwrite')
        .objectStore('contract')
        .add({ id: 1, name, address, abi })
      saveRequest.onsuccess = () => {
        resolve(true)
      }
      saveRequest.onerror = () => {
        resolve(false)
      }
    })
  },
  async removeContract ({ state }, id) {
    const db = state.db
    if (!db || !(db instanceof IDBDatabase)) {
      return false
    }
    return new Promise(resolve => {
      const delRequest = db.transaction(['contract'], 'readwrite')
        .objectStore('contract')
        .delete(id)
      delRequest.onsuccess = () => {
        resolve(true)
      }
      delRequest.onerror = () => {
        resolve(false)
      }
    })
  },
  async getAllContracts ({ state }) {
    const db = state.db
    if (!db || !(db instanceof IDBDatabase)) {
      return false
    }
    return new Promise(resolve => {
      const getRequest = db.transaction(['contract'])
        .objectStore('contract')
        .getAll()
      getRequest.onsuccess = event => {
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
