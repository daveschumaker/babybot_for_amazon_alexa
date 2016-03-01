
// Number of milliseconds in a day.
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

var calcDate = {
    /**
    *   Get number of days old in order to calculate age and get proper 
    *   description for the week.
    **/
    getNumDaysOld: function(birthday) {
        var currentDate = new Date();

        var firstDate = new Date();
        var secondDate = new Date(birthday);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))-1;
        
        return diffDays;
        //var totalWeeks = Math.floor(diffDays / 7);
        //var extraDays = (diffDays % 7);
        
        //console.log(totalWeeks, 'week(s) and', extraDays, 'day(s)');
    },
    calcAge: function(fromDate, toDate) {
        if (toDate) {
            toDate = new Date(toDate);
        } else {
            var toDate = new Date();
        }

        var age = [];
        var fromDate = new Date(fromDate);
        var y = [
                toDate.getFullYear(),
                fromDate.getFullYear()
            ];
        var m = [
                toDate.getMonth(),
                fromDate.getMonth()
            ];
        var d = [
                toDate.getDate(),
                fromDate.getDate()
            ];
        var ydiff = y[0] - y[1];
        var mdiff = m[0] - m[1];
        var ddiff = d[0] - d[1];

        if (mdiff < 0 || (mdiff === 0 && ddiff < 0)) --ydiff;
        if (mdiff < 0) mdiff += 12;
        if (ddiff < 0) {
            fromDate.setMonth(m[1]+1, 0);
            ddiff = fromDate.getDate() - d[1] + d[0];
            --mdiff;
        }

        if (ydiff > 0) age.push(ydiff + ' year' + (ydiff > 1 ? 's ':' '));
        if (mdiff > 0) age.push(mdiff + ' month' + (mdiff > 1 ? 's':''));
        if (ddiff > 0) age.push(ddiff + ' day' + (ddiff > 1 ? 's':''));
        if (age.length > 1) age.splice(age.length - 1, 0, ' and ');

        return age.join('');
    },
    getWeeksOld: function(birthday) {
        var joinWord = '';
        var result = {
            ageString: '',
            days: '',
            weeks: ''
        }

        var daysOld = calcDate.getNumDaysOld(birthday);
        var weeksOld = Math.floor(daysOld / 7);

        result.weeks = weeksOld;
        result.days = daysOld;

        if (weeksOld === 1) {
            result.ageString = '1 week';
        } else if (weeksOld > 1) {
            result.ageString = weeksOld + ' weeks'
        }

        // If less than a week old, omit the word 'and'
        if (weeksOld >= 1) {
            joinWord = ' and ';
        }

        if (daysOld % 7 === 1) {
            result.ageString += joinWord + '1 day';
        } else if (daysOld % 7 > 1) {
            result.ageString += joinWord + (daysOld % 7) + ' days';
        }

        //console.log('AGE STRING:', result.ageString);
        return result;
    },

    /**
    *   Returns whole number representing the current week of your baby's life. This is passed into data/babyData.js
    *   and fetches a description for what's going on in your baby's life this week.
    **/
    getCurrentWeek: function(birthday) {
        var currentDate = new Date();

        var firstDate = new Date();
        var secondDate = new Date(birthday);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
        
        return Math.ceil(diffDays / 7);
    }
}

module.exports = calcDate;