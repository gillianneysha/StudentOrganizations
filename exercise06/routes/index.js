var express = require('express');
var router = express.Router();
var students = require('../controllers/student.controller.js');
const { organizations } = require('../models/index.js');
//var students = require('../controllers/student.controller.js');
//var students = require('../controllers/organization.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Registration' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'SignIn' });
});

router.get('/organization', function(req, res, next) {
  res.render('organization', { title: 'organization' });
});

router.get('/', students.findAll);
router.get('/', organizations.findAll);

module.exports = router;
