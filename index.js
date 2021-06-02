const express = require('express')   //nom i express
const app = express();
const mongoose = require('mongoose')   // npm i mongoose
const port = 3002 || process.env.PORT
require('dotenv').config()            // npm i dotenv


mongoose.connect(process.env.MONGOO_URL, { useNewUrlParser: true, useUnifiedTopology: true })



app.listen(port, console.log(`connected on Port ${port}`))