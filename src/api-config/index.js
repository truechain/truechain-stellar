import axios from 'axios'

const URL = 'http://localhost:3000'

export default {
  compile (source, version) {
    const data = {
      source,
      version
    }
    return axios.post(`${URL}/compile`, data)
  }
}
