// var express = require('express');
// var router = express.Router();
// var students = require('../controllers/student.controller.js');
// //var hash = require();

// router.post('/', students.create);
// router.get('/', students.findAll);

// module.exports = router;

const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/student.controller.js');
const bcrypt = require('bcrypt');

// Login route
router.post('/', studentsController.login);

module.exports = router;
