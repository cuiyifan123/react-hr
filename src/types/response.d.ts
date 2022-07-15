export interface IResponse<T> {
    success: boolean
    code: string
    message: string
    data: T
}

// 登录接口返回的data是一个string，不能使用interface定义
export type ILoginResponse = string
