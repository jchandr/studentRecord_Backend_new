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
        }
        res.status(201).json({
            message: 'Student' + 'was created',
            student: response
        });
    });
});

module.exports = router;