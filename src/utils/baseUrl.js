import axios from "axios";
import { DOMAIN_BE, LOCALSTORAGE_USER, TOKEN } from "./constant";
import { getLocalStorage } from "./config";

export const http = axios.create({
    baseURL: DOMAIN_BE,
    timeout: 10000
})

// // interceptor => can thiệp một hàm middleware vào request và response khi gọi api
http.interceptors.request.use(config => {
    const token = getLocalStorage(LOCALSTORAGE_USER)

    return {
        ...config,
        headers: {
            // ...config.headers,
            Authorization: `${token ? `Bearer ${token.accessToken}` : ''}`,
            tokenCyberSoft: TOKEN
        }
    }
}, err => { console.log(err) })