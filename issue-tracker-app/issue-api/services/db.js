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

/** authenticate the connection */
conn
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully - db.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
