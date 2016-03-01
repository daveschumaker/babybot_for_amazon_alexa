var babyData = require('../data/babyData');

var parseData = function(obj) {
    var gender = obj.gender;
    var weeks = obj.weeks;

    var subj_projoun, obj_pronoun, obj_pronoun_2;
    var weeklyDescription = babyData[weeks];

    if (obj.gender === 'M') {
        subj_projoun = 'he';
        obj_pronoun = 'his';
        obj_pronoun_2 = 'him';
    } else {
        subj_projoun = 'she';
        obj_pronoun = 'her';
        obj_pronoun_2 = 'her';        
    }

    // regex fun
    weeklyDescription = weeklyDescription.replace(/{subject_pronoun}/gi, subj_projoun);
    weeklyDescription = weeklyDescription.replace(/{object_pronoun}/gi, obj_pronoun);
    weeklyDescription = weeklyDescription.replace(/{object_pronoun_2}/gi, obj_pronoun_2);

    return weeklyDescription;
}

module.exports = parseData;