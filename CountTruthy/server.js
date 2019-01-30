'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//count the number of truthy elements in the array 

const array = [0, null, '', undefined, 1, 2, 3];
var arrayLength = array.length;
function countTruthy(arr) {
    let count = 0;
    for (let i = 0; i <= arrayLength; i++){
        if (arr[i]) {count++}
       
    }
    return("Number of truthy comments= " + count)     
}


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(countTruthy(array));
}).listen(port);
