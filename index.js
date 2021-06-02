const express = require('express')   //nom i express
const app = express();
const mongoose = require('mongoose')   // npm i mongoose
const cors = require('cors')   //npm i cors
const port = 3002 || process.env.PORT

app.use(cors())
require('dotenv').config()            // npm i dotenv


const leaderRouter = require('./routes/leaderboard')

mongoose.connect(process.env.MONGOO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    res.send('Welcome to POKE leaderboard API')
})

app.use(leaderRouter)




app.listen(port, console.log(`connected on Port ${port}`))