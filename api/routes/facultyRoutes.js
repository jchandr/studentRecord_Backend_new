var express = require('express')
var models = require('../../models')
var router = express.Router()

router.get('/', (req, res) => {
  models.Faculty.findAll({}).then(faculties => {
    res.status(200)
    res.json(faculties)
  })
})

module.exports = router
