import axios from "axios";
import { GetItem } from "../helpers/persistance-storage";

axios.defaults.baseURL="http://localhost:3000/api"

axios.interceptors.request.use(config => {

    const token =GetItem('token')
    const  autharization=  token? `Token ${token}`: ""
    config.headers.Authorization= autharization
    return config
    



})

export default axios