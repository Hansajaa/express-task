// const express = require('express');
import express from "express"
const app = express()

// const cors = require('cors')
import cors from 'cors'
// const bodyParser = require('body-parser')
import bodyParser from 'body-parser'
app.use(cors())
app.use(bodyParser.json())

//import router array
// const router = require('./routes/routes')
import { router } from "./routes/routes"

// Base Path
app.use("/api",router);


app.listen(4000,()=>{console.log("server started on port 4000");})