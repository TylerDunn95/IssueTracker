// Create User route

var express = require('express');
var router = express.Router();
var Sequelize = require ('sequelize');
var bcrpyt = require ('bcryptjs');
module.exports = router;

/* establish a connection with the database */
const conn = new Sequelize('issueTrackerDB', 'ApolloAdmin', 'IssueTracker2017', {
    host: 'mtsu-4700-2017.database.windows.net',
    dialect: 'mssql',
    driver: 'tedious',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    port: 1433,
    dialectOptions: {
      encrypt: true
    }
});

/* authenticate the connection */
conn
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully - projects.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
});


/* import database models */
const Users = conn.import('../models/IssueTracker_Users.js')

/**
 *  POST project
 *  test in bash with:
 *  curl -XPOST http://localhost:3000/projects -d 'ProjectId={SOME_UNIQUE_ID}&ProjectClient=Some%20Other%20Guy&ProjectName=REST%20api&ProjectDescription=another%20test&ProjectCreatorId=82&ProjectManagerId=82&ProjectDisabled=false'
*/
router.post('/', (req, res, next) => {
    Projects.create(req.body)
    .then((err, newProj) => {
        if(err) {
          console.log('There was an error completing the insertion: ', err);
          res.send(err);
        }
        else {
          console.log('New User ${newUser.UserName}, with id ${newUser.id} has been created.');
          res.json(newUser);
        }
    });
});


/**
 *  POST project
 *  test in bash with:
 *  curl -XPOST http://localhost:3000/projects -d 'ProjectId={SOME_UNIQUE_ID}&ProjectClient=Some%20Other%20Guy&ProjectName=REST%20api&ProjectDescription=another%20test&ProjectCreatorId=82&ProjectManagerId=82&ProjectDisabled=false'
*/
router.post('/', (req, res, next) => {
    Users.create(req.body)
    .then((err, newProj) => {
        if(err) {
          console.log('There was an error completing the insertion: ', err);
          res.send(err);
        }
        else {
          console.log('New Project ${newProj.ProjectName}, with id ${newProj.id} has been created.');
          res.json(newProj);
        }
    });
});
