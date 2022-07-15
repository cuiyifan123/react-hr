import axios from "axios";
import type {AxiosRequestConfig} from 'axios'
import type {IResponse} from "@/types/response";
// 读取环境变量里面的url路径
const baseApiURL = import.meta.env.VITE_BASE_API_URL
const instance = axios.create({
    baseURL: baseApiURL,
    timeout: 10000
})
// 响应拦截器
instance.interceptors.response.use((response) => {
    if (!response.data.success) {
        return Promise.reject(new Error(response.data.message))
    }
    return response
}, error => {
    // console.log(error)
    return Promise.reject(new Error(error.message))
})

// 使用ts后没办法在响应拦截器里面脱壳了( 脱壳后类型提示是有问题的 ),封装一个函数用来做数据脱壳
async function request<T>(config: AxiosRequestConfig) {
    const res = await instance.request<IResponse<T>>(config)
    return res.data
}

export default request