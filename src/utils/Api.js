const BASE_URL_DEV='https://blooming-woodland-81460.herokuapp.com'
const BASE_URL_PRODUCTION='https://blooming-woodland-81460.herokuapp.com'
const URL = BASE_URL_DEV
import axios from 'axios'
import StorageUtils from '../utils/Storage'
export default class Api {
    static async login(params) {
        const data = await axios.post(`${URL}/auth/login`, params)
        return  data
    }
    static async register(params) {
        const data = await axios.post(`${URL}/auth/register`, params)
        return  data
    }
    static async getBooks(params){
        const token = await StorageUtils.getToken()
        console.log(token)
        const data = await axios({
            method:'get',
            url:`${URL}/api/photos`,
            headers:{
                'x-auth-token':token
            }
        })

        return data
    }
}

