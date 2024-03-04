const express = require('express');
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

//import router array
const router = require('./routes/routes')

// Base Path
app.use("/api",router);


app.listen(4000,()=>{console.log("server started on port 4000");})