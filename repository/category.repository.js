const db = require('../config/dbconfig');



function getAllCategory(callBack){

    let sql = "SELECT * FROM category";
    db.query(sql,function(err,data,fields){
        if(err) throw err;

        callBack(data)
    })
}

module.exports.getAllCategory = getAllCategory;