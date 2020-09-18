
import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3333/api'
})

export default axios