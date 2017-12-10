const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'bustudentrecord.cs1znygw5ppc.us-west-2.rds.amazonaws.com',
    user: 'root',
    password: 'wlan80211',
    database: 'bu_student_record'
});

connection.connect((err) => {
    if(err) {
        console.error('error connecting database: ' + err.stack);
        return;
    }
    console.log('connected to database as id ' + connection.threadId);
});

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
    const student = {
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        email: req.query.email,
        studentBNumber: req.query.studentBNumber,
        username: req.query.username,
        contactAdvisor: req.query.contactAdvisor,
        authorizeFlag: req.query.authorizeFlag,
        studentType: req.query.studentType,
        addBy: req.query.addBy,
    };
    res.status(201).json({
        message: 'Student was created',
        student: student
    });
});

module.exports = router;