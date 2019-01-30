'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//list all even and odd numbers in a range

function numbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
        //if (i % 2 === 0) {
        //    console.log(i + ' is EVEN');
        //}
        //else {
        //    console.log(i + ' is ODD');
        //}
    }
}




http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(numbers(20));
}).listen(port);
