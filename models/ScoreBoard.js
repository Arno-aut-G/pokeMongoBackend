const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreBoard = new Schema({
    pokemon1: String,
    pokemon2: String,
    winner: String
})

module.exports = moongoose.model('ScoreBoard', ScoreBoard)