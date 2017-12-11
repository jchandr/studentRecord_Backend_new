const express = require('express');
const router = express.Router();

const connection = require('../../dataBaseConnection');

router.get('/', (req, res, next) => {
    connection.query('select * from facultytable', (err, response, fields) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send({
                response
            })
        }
    })
});

module.exports = router;