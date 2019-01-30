'use strict';
// JavaScript source code
//fizzbuzz algorithm
//if number div by 3 then you get fizz
//if number div by 5 then buzz
//if both then fizzbuzz
//if NOT div by either then you get the same result as the one passed in
//if the parameter is not a number then you return 'not a number'




function fizzbuzz(input) {
    //if (typeof inout !== 'number') return NaN; 
    if (input % 1 != 0) {
        console.log('Not a number')
    }
    if ((input % 3 == 0) && (input % 5 === 0)) {
        consol.log('fizzbuzz');
    }
    if ((input % 3 === 0)) {
        console.log('fizz')
    }
    if ((input % 5 === 0)) {
        console.log('buzz')
    }
    // return console.log(input)
    else {
        console.log(input)
    }
}

fizzbuzz(3)
//console.output(output)