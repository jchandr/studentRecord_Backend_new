var express = require('express')
var models = require('../../models')
var router = express.Router()
var Sequelize = require('sequelize')
var pick = require('lodash/pick')
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

router.get('/:studentId/funding', (req, res) => {
  models.Funding.findAll({
    where: {
      idx: {[Op.eq]: req.params.studentId}
    }
  }).then(studentFudings => {
    res.status(200)
    res.json(studentFudings)
  })
})

router.post('/:studentId/funding', (req, res) => {
  const newFunding = pick(req.body, 'numberCredits',
    'raOrTaOrGa',
    'semesterCode',
    'stipend',
    'stipendAmount',
    'editBy')
  newFunding.idx = req.params.studentId
  models.Funding.bulkCreate([
    {
      ...newFunding
    }
  ]).then(sqlResponse => {
    res.status(200)
    res.json(sqlResponse)
  })
})

router.delete('/:studentId/funding/:fundingId', (req, res) => {
  models.Funding.destroy({
    where: {
      rowIdx: {[Op.eq]: req.params.fundingId}
    }
  }).then(sqlResponse => {
    res.status(200)
    res.json(sqlResponse)
  })
})

router.patch('/:studentId/funding/:fundingId', (req, res) => {
  const updatedFunding = pick(req.body, 'numberCredits',
    'raOrTaOrGa',
    'semesterCode',
    'stipend',
    'stipendAmount',
    'editBy')
  updatedFunding.idx = req.params.studentId
  models.Funding.update({
    ...updatedFunding
  }, {
    where: {
      rowIdx: {[Op.eq]: req.params.fundingId}
    }
  }).then(sqlResponse => {
    res.status(200)
    res.json(sqlResponse)
  })
})



module.exports = router
