const db = require('../config/dbconfig');


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

module.exports.createTrip = createTrip;