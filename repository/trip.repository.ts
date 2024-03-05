// const dataBase = require('../config/dbconfig');
import {db} from '../config/dbconfig'

// Create New Trip
export function createNewTrip(newTrip:any,callBack:any){

    let sql = `INSERT into trip VALUES(?,?,?,?,?,?)`;

    db.query(sql,[newTrip.id, newTrip.tripName, newTrip.tripDesc, newTrip.tripThumbnailUrl, newTrip.category.id, newTrip.user.id],(err:any,data:any) =>{
       
        if(err) throw err
        
        if(data.affectedRows > 0){
            callBack(true);
        }else{
            callBack(false);
        }
       
    })
}


// Get trips by user and category ids
export function getTripsByIds(userId:any,categoryId:any,callBack:any){

    let sql = `SELECT * FROM trip WHERE USER_ID=${userId} AND CATEGORY_ID=${categoryId}`;

    db.query(sql,(err:any,data:any,fields:any)=>{
        if(err) throw err;

        callBack(data);
    })
}