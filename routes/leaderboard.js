const ScoreBoard = require('../models/ScoreBoard')
const express = require('express')
const leaderRouter = express.Router()
leaderRouter.use(express.urlencoded({ extended: true }))





leaderRouter.post('/game/save', (req, res) => {
    ScoreBoard
        .create(req.body)
        .then((scoreboard) => res.json(scoreboard))
        .catch((err) => res.json(err))

})

leaderRouter.get('/game/leaderboard', (req, res) => {
    ScoreBoard
        .find({})
        .then(scoreboard => res.json(scoreboard))
        .catch(err => res.json(err))
})

leaderRouter.delete('/game/leaderboard/:id', (req, res) => {
    ScoreBoard
        .deleteOne({ _id: req.params.id })
        .then(() => res.json('Data hase been deleted'))
        .catch(err => res.json(err))
})

module.exports = leaderRouter
