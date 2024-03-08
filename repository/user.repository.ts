import { db } from "../config/dbconfig";

//get user by ID from database
export function getUserById(id:any,callBack:any){
    let sql = `SELECT * FROM user WHERE ID=${id}`
    db.query(sql,(err:any,data:any,fields:any)=>{
        
        if(err) throw err;

        callBack(data)
    })
}

