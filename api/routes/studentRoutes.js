var express = require('express');
var models = require('../../models');
var router = express.Router();

/* GET all products. */
router.get('/', function(req, res) {
  models.Student.findAll({
  }).then(function(students){
    res.json(students);
  });
});

module.exports = router;
