var _ = require('lodash');

var babyData = require('../data/babyData.js');
var babyStore = require('./babyStore');
var calcDate = require('./calcDate');
var parseData = require('./parseData');

module.exports = function(app) {
    app.get('/*', function (req, res) {
        res.send('babyBot(👶)');
    });

    app.post('/api/echo/babyinfo', function (req, res) {
        var responseText;
        var babyAge = calcDate.getWeeksOld(babyStore.babyBirthday);
        var babyInfo = babyStore.babyName + ' is ' + babyAge.ageString + ' old. ';
        var currentWeek = calcDate.getCurrentWeek(babyStore.babyBirthday);
 
        var babyWeeklyDescription = parseData({
            gender: babyStore.babyGender,
            weeks: currentWeek
        });

        if (_.has(req, 'body.request.intent.name')) {
            var intentType = req.body.request.intent.name;

            if (intentType === 'GetAge') {
                responseText = babyStore.babyName + " is " + calcDate.calcAge(babyStore.babyBirthday) + " old";
            } else {
                responseText = babyInfo + babyWeeklyDescription;
            }

            responseBody = {
                "version": "1.0",
                "response": {
                    "outputSpeech": {
                        "type": "PlainText",
                        "text": responseText
                    },
                    "shouldEndSession": true
                }
            };

            res.statusCode = 200;
            res.contentType('application/json');
            res.send(responseBody);
        } else {
            responseBody = {
                "version": "1.0",
                "error": "An error occurred",
                "response": {
                    "shouldEndSession": true
                }
            };

            console.log('Error: Property not found...')
            res.statusCode = 500;
            res.contentType('application/json');
            res.send(responseBody);       
        }
    })
}