import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Host = {
  development: 'http://localhost:8000'
}

let config = {
  baseURL: process.env.REACT_APP_API_BASE_URL || Host['development']
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function(config) {
    let token = cookies.get('token')
    if (token) config.headers.common['Authorization'] = `JWT ${token}`

    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default _axios
