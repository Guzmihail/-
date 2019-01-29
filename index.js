function isAllTrue(array, fn ) {
    var x = 0; 
    var y = 0;
    if((array == 0 ) || (array.lenght <= 0 )) {
        throw new Error ("empty array");
    }else if (typeof fn != 'function'){
        throw new Error("fn is not a function");
    } else {
        for ( var i = 0; i < array.lenght; i++){
            var z = fn(array[i]);
            if(z == false) {
                y++;

            }else if ( z == true) {
                x++;
            }
            if (array.lenght == x ){
                return true;
            } else if (y > 0) {
                return false;
            }
        }
    }
};

function isSomeTrue(array, fn) {

    var x = 0;

    if (( array == 0 ) || (array.length <= 0)) {
        throw new Error("empty array");
    } else if (typeof fn != 'function') {
        throw new Error("fn is not a function");
    } else {

        for (var i = 0; i < array.length; i++) {
            var z = fn(array[i]);
            if (z == true) {
                x++;
            }
        }

        if (x < 1) {
            return false;
        } else (x >= 1)
        {
            return true;
        }
    }
};
function returnBadArguments(fn) {
    var x = new Array();
    var z = '';
    if (typeof fn != 'function') {
        throw new Error("fn is not a function");
    }
    for (var i = 1; i < arguments.length; i++) {
        try {
            z = fn(arguments[i]);
        } catch (e) {
            x.push(arguments[i]);
        }
    }
    return x;
};
function calculator(number=0) {

    if (typeof number != 'number') {
        throw new Error("number is not a number");
    }

    var ob = {
        sum: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number += arguments[i];
            }
            return number;
        },
        dif: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number -= arguments[i];
            }
            return number;
        },
        div: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number /= arguments[i];
            }
            return number;
        },
        mul: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number *= arguments[i];
            }
            return number;
        }
    }
    return ob;
};
