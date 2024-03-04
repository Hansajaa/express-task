const user = require('../repository/user.repository');

function getUser(id,callBack){
   
    user.getUserById(id,(data)=>{
        callBack(data)
    })

}

module.exports.getUser = getUser;