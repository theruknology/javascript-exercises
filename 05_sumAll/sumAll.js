const sumAll = function(a,b) {

    //if string
    if (typeof a != "number" || typeof b != "number") {
        return "ERROR";
    } else if( a >= 0 && b >= 0 ){
        //if given numbers
        q = a;
        sum = 0;

        //if a > b
        if (a>b) {

            for (q; q>=b; q--) {
                sum += q;
            }

            return sum;

        } else if(a<b) {

            for (q; q<=b; q++) {
                sum += q;
            } 

            return sum;

        } else {
            return a+b;
        }
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
