const repeatString = function(string, rep) {
    if (rep >= 0) {
        final = '';
        i = rep;
        while (i > 0) {
            final += string;
            i--;
        }
        return final;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
