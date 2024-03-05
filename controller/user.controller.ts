// const user = require('../repository/user.repository');
import { getUserById } from "../repository/user.repository"

export function getUser(id:any,callBack:any){
   
    getUserById(id,(data:any)=>{
        callBack(data)
    })

}