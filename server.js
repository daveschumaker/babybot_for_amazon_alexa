/**
*   BABYBOT
*   Alexa Skill to return information about your newborn baby
*   by Dave Schumaker (@davely)
**/

// Express Server
var express = require('express');
var app = express();

// Middleware
var bodyParser = require('body-parser');

// Modules and utilities
var babyStore = require('./components/babyStore');
var calcDate = require('./components/calcDate');
var parseData = require('./components/parseData');
var routes = require('./components/routes');

// Configuration settings
var PORT = process.env.port || 3002;
babyStore.babyName = "MonsterBaby";
babyStore.babyGender = "F"; // choose either M or F
babyStore.babyBirthday = "02-29-2016"; // Date: MM-DD-YYYY

////////////////////////////////////////////////////////////////

// Express middleware to handle API requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
    console.log('ERROR:', err);
    
    res.statusCode = 500;
    res.contentType('application/json');
    res.send({error: 'Unable to complete request. An error occurred.'});
});

// Routing for API requests
routes(app);

app.listen(PORT, function () {
    console.log('BabyBot app listening on port', PORT);
});
