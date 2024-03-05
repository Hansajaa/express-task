import { db } from "../config/dbconfig";

export function getAllCategory(callBack:any){

    let sql = "SELECT * FROM category";
    db.query(sql,function(err:any,data:any,fields:any){
        if(err) throw err;

        callBack(data)
    })
}
