const mysql = require('mysql2');

// Create Connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Hansaja@1234',
    database:'react_task'
})


module.exports = db;