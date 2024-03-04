const db = require('../config/dbconfig');

//get user by ID from database
function getUserById(id,callBack){
    let sql = `SELECT * FROM user WHERE ID=${id}`
    db.query(sql,(err,data,fields)=>{
        
        if(err) throw err;

        callBack(data)
    })
}

module.exports.getUserById = getUserById;