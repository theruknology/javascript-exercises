const removeFromArray = function(...arguments) {

    const given = arguments[0];
    const clearArray = [];
    const forbidden = arguments.slice(1,arguments.length);

    for (let i = 0; i < given.length; i++) {
        
        var found = false;
        for (let x = 0; x < forbidden.length; x++) {
            if (given[i] == forbidden[x]) {
                found = true; 
            }
        } 

        if (!found) {
            clearArray.push(given[i]);
        }

    }

    return clearArray;

};

//Get first param and make it array
//Create clean array
//Create forbidden array
//loop over given array
    // during loop first loop over forbidden array
        //check if it includes it, continue
        //else add it to clean list

// Do not edit below this line
module.exports = removeFromArray;
