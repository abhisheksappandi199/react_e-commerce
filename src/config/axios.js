
import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://node-backend-ilkalsarees.herokuapp.com/api'
})

export default axios

// http://localhost:3333/api
// https://node-backend-ilkalsarees.herokuapp.com/api