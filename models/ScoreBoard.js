const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreBoard = new Schema({
    pokemon1: String,
    pokemon2: String,
    winner: String
})

module.exports = mongoose.model('ScoreBoard', ScoreBoard)