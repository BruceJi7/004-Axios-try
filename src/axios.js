import axios from 'axios'

const instance = axios.create ({
    baseURL: 'example url'
})

instance.defaults.headers.common['Authorization'] = 'AUTH BUT FROM IN THE INSTANCE WOO'

export default instance