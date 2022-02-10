import axios from 'axios'

// const API_URL = 'https://mdquilindo.pythonanywhere.com/'
const API_URL = '/'

export default axios.create({
  baseURL: API_URL
})