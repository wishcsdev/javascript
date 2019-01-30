'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

// find sum of multiples of 3 and 5 upto the limit number 

function sum(limit) {
    var summ = 0;

    for (let i = 0; i <= limit; i++)
        if ((i % 3 === 0) || (i % 5 === 0))
            summ += i;    

    return ("The sum is= " + summ);
}
var limit = 10;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(sum(limit));
}).listen(port);
