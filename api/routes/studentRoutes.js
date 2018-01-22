var express = require('express')
var models = require('../../models')
var router = express.Router()
var Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', (req, res) => {
  models.Student.findAll({}).then(students => {
    res.status(200)
    res.json(students)
  })
})

router.get('/ms', (req, res) => {
  models.Student.findAll({
    where: {
      studentType: {[Op.eq]: 'MS'}
    }
  }).then(students => {
    res.status(200)
    res.json(students)
  })
})

router.get('/phd', (req, res) => {
  models.Student.findAll({
    where: {
      studentType: {[Op.eq]: 'PHD'}
    }
  }).then(students => {
    res.status(200)
    res.json(students)
  })
})

router.get('/:studentId', (req, res) => {
  models.Student.find({
    where: {
      idx: {[Op.eq]: req.params.studentId}
    }
  }).then(student => {
    res.status(200)
    res.json(student)
  })
})

router.get('/:studentId/funding',(req, res) => {
  models.Funding.findAll({
    where: {
      idx: {[Op.eq]: req.params.studentId}
    }
  }).then(studentFudings => {
    res.status(200)
    res.json(studentFudings)
  })
})

module.exports = router
