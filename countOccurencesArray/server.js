'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//given array, count number of times an element occurs. 
const stuff = [1212, 213213, 1, 1212, 1, 1, 1];

//function countOccurences(stuff, element) {
//    let count = 0;
//    if (element in stuff) {
//        for (let values of stuff) {
//            if (values === element) { count++; }
//        }
//    console.log(count);    
//    }
//    else { console.error('element not in array');}    
//}

//EFFICIENT CODE
//take array and element to count
//call back function: acumulator is last count value, 
//current is current value in the array
//0 is initializer for accumulator
function countOccurences(stuff, element) {
    return stuff.reduce((accumulator, current) => {
        const occurence = (current === element) ? 1:0;
        return accumulator + occurence;
    }, 0);
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(countOccurences(stuff,1));
}).listen(port);
