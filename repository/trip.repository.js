const db = require('../config/dbconfig');

// Create New Trip
function createTrip(newTrip,callBack){

    let sql = `INSERT into trip VALUES(?,?,?,?,?,?)`;

    db.query(sql,[newTrip.id, newTrip.tripName, newTrip.tripDesc, newTrip.tripThumbnailUrl, newTrip.category.id, newTrip.user.id],(err,data) =>{
       
        if(err) throw err
        
        if(data.affectedRows > 0){
            callBack(true);
        }else{
            callBack(false);
        }
       
    })
}


// Get trips by user and category ids
function getTripsByIds(userId,categoryId,callBack){

    let sql = `SELECT * FROM trip WHERE USER_ID=${userId} AND CATEGORY_ID=${categoryId}`;

    db.query(sql,(err,data,fields)=>{
        if(err) throw err;

        callBack(data);
    })
}

module.exports = {
    createTrip:createTrip,
    getTripsByIds:getTripsByIds
}