// 存储用户相关模块
import {defineStore} from 'pinia'

export const UserStore = defineStore('ustore', {
    state: () =>{
        return {
            token: "",
            username: ""
        }
    },
    actions:{
        // 保存token的方法
        saveToken(value){
            this.token = value
        },
        saveUserName(value){
            this.username = value
        }
    },
    persist: true
})

