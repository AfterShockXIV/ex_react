import axios from "axios"
import { APP_SETTING } from "../../env"

axios.defaults.baseURL = APP_SETTING.DEV.WEBSERVICE

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return error
    }
)