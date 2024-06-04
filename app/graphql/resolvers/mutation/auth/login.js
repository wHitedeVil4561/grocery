import { onLogin } from "../../../../services/auth.js"

export const LoginMutation = {
    async login(_,{payload},{db}){
        return await onLogin(payload,db);
    }
}