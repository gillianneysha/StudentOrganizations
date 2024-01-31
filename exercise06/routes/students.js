var express = require('express');
var router = express.Router();
var students = require('../controllers/student.controller.js');

router.post('/', students.create);
router.get('/', students.findAll);

module.exports = router;
