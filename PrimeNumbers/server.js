'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
//print all prime numbers till the number is passed

function showPrimes(numberss) {
    for (let number = 2; number <= numberss; number++) {

        let isPrime = true;
        for (let factors = 2; factors < number; factors++) {   //key part is that factors is strictly smaller than number or 2/2 would be possible. 
            if (factors / number === 0) { isPrime = false; break; }
        }


        if (showPrimes) console.log(number);
    }
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(showPrimes(20));
}).listen(port);
