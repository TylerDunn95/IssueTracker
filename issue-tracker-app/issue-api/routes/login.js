var express = require('express');
var router = express.Router();
var Sequelize = require ('sequelize');
var bcrpyt = require ('bcryptjs');
module.exports = router;
var db = require('../services/db');


//const Users = db.conn.import('../models/IssueTracker_Users.js')

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

