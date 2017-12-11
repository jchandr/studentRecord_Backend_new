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

module.exports = connection;