const express = require('express');
const router = express.Router();
const connection = require('../../dataBaseConnection');

router.get('/', (req, res, next) => {
    connection.query('select * from studenttable', (err, response, fields) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send({
                response
            })
        }
    })
});

router.post('/', (req, res, next) => {
    const student = [
        req.query.firstName,
        req.query.lastName,
        req.query.email,
        req.query.studentBNumber,
        req.query.username,
        req.query.contactAdvisor,
        req.query.authorizeFlag,
        req.query.studentType,
        req.query.addBy,
    ];
    connection.query('insert into studenttable (First_Name,' +
        'Last_Name,' +
        'Email,' +
        'Stud_BNumber,' +
        'Username,' +
        'Contact_Advisor,' +
        'AuthorizeFlag,' +
        'Student_Type,' +
        'AddBy) values (?,?,?,?,?,?,?,?,?)',student, (err, response, fields) => {
        if(err) {
            res.status(400).json({
                message: err,
            });
        } else {
            res.status(201).json({
                message: 'Student' + 'was created',
                response: response
            });
        }
    });
});

router.get('/:studentId', (req, res, next) => {
    connection.query('select * from studenttable where Idx=?', req.params.studentId,
        (err, response, fields) => {
            if(err) {
                res.status(400).json({
                    message: err,
                });
            } else {
                res.status(200).json({
                    message: 'Student details',
                    response: response
                });
            }
        });
});

module.exports = router;