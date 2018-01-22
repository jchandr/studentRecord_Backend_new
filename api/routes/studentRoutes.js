const express = require('express')
const router = express.Router()
const connection = require('../../dataBaseConnection')

router.get('/', (req, res, next) => {
  const sqlQuery = 'select idx,firstName,lastName from studenttable'
  connection.query(sqlQuery, (err, response, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.status(201).send({
        response
      })
    }
  })
})

router.get('/ms', (req, res, next) => {
  const sqlQuery = 'select idx,firstName,lastName from studenttable where studentType = ?'
  connection.query(sqlQuery, 'MS', (err, response, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.status(201).send({
        response
      })
    }
  })
})

router.get('/phd', (req, res, next) => {
  const sqlQuery = 'select idx,firstName,lastName from studenttable where studentType = ?'
  connection.query(sqlQuery, 'PHD', (err, response, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.status(201).send({
        response
      })
    }
  })
})

router.post('/', (req, res, next) => {
  const sqlQuery = 'insert into studenttable (First_Name,' +
    'Last_Name,' +
    'Email,' +
    'Stud_BNumber,' +
    'Username,' +
    'Contact_Advisor,' +
    'AuthorizeFlag,' +
    'Student_Type,' +
    'AddBy) values (?,?,?,?,?,?,?,?,?)'
  connection.query(sqlQuery, student, (err, response, fields) => {
    if (err) {
      res.status(400).json({
        message: err,
      })
    } else {
      res.status(201).json({
        message: 'Student' + 'was created',
        response: response
      })
    }
  })
})

router.get('/:studentId', (req, res, next) => {
  const sqlQuery = 'select * from studenttable where Idx=?'
  connection.query(sqlQuery, req.params.studentId,
    (err, response, fields) => {
      if (err) {
        res.status(400).json({
          message: err,
        })
      } else {
        res.status(201).json({
          message: 'Student details',
          response: response
        })
      }
    })
})

router.get('/:studentId/funding', (req, res, next) => {
  const sqlQuery = 'select * from fundingtable where Idx=?'
  connection.query(sqlQuery, req.params.studentId,
    (err, response, fields) => {
      if (err) {
        res.status(400).json({
          message: err,
        })
      } else {
        res.status(201).json({
          message: 'Student Funding Details',
          response: response
        })
      }
    })
})

router.post('/:studentId/funding', (req, res, next) => {
  const newFunding = {
    idx: req.params.studentId,
    numberCredits: req.body.numberCredits,
    raOrTaOrGa: req.body.raOrTaOrGa,
    semesterCode: req.body.semesterCode,
    stipend: req.body.stipend,
    stipendAmount: req.body.stipendAmount,
    editBy: req.body.editBy
  }
  const sqlQuery = 'insert into fundingtable (idx, numberCredits, raOrTaOrGa, semesterCode,' +
    'stipend, stipendAmount, editBy) values (?)'
  connection.query(sqlQuery, [[
      newFunding.idx,
      newFunding.numberCredits,
      newFunding.raOrTaOrGa,
      newFunding.semesterCode,
      newFunding.stipend,
      newFunding.stipendAmount,
      newFunding.editBy
    ]],
    (err, response, fields) => {
      if (err) {
        res.status(400).json({
          message: err
        })
      } else {
        res.status(201).json({
          message: 'Student Funding created',
          response: response
        })
      }
    })
})

router.delete('/:studentId/funding/:rowIdx', (req, res, next) => {
  const rowIdxToDelete = req.params.rowIdx
  const sqlQuery = 'delete from fundingtable where rowIdx = ?'
  connection.query(sqlQuery,
    [[rowIdxToDelete]],
    (err, response, fields) => {
      if (err) {
        res.status(400).json({
          message: err
        })
      } else {
        res.status(201).json({
          message: 'student funding deleted',
          response: response
        })
      }
    })
})

module.exports = router