import request from "../utils/request";
import type {ILoginResponse} from "@/types/response";
import type {ILoginRequest} from '@/types/request'

/**
 *  用户登录接口
 * @param data { mobile:string password:string }
 */
export function userLogin(data: ILoginRequest) {
    return request<ILoginResponse>({method: "post", url: "/sys/login"})
}