const axios = require("axios") ; 
const APP_SETTING = require("../env")

axios.defaults.baseURL = APP_SETTING.DEV.WEBSERVICE

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return error
    }
)