import {makeAutoObservable} from 'mobx';
import {userLogin} from "@/api/user";

class User {
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    async login() {
        try {
            const res = await userLogin({mobile: "", password: ""})
        } catch (e) {
            console.log(e)
        }
    }
}

const user = new User()
export default user
