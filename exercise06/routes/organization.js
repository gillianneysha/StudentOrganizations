var express = require('express');
var router = express.Router();
var organizations = require('../controllers/organization.controller.js');

router.post('/', organizations.create);
router.get('/', organizations.findAll);

module.exports = router;
