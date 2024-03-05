import mysql from 'mysql2'

// Create Connection
export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Hansaja@1234',
    database:'react_task'
})
