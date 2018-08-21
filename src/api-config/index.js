import axios from 'axios'

const URL = process.env.NODE_ENV === 'production'
  ? 'https://stellar.truechain.pro/ethserver'
  : 'http://localhost:3000'

export default {
  compile (source, version) {
    const data = {
      source,
      version
    }
    return axios.post(`${URL}/compile`, data)
  }
}
