'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

//Check speed of car where speed limit is 70
//if speed <=70 OK message 
//for every 5 over the driver gets 1 point
//Use floor function from Math
// More than 12 points then License suspended

function speed(number) {
    let speed = Math.floor(number)
    if (speed <= 70) {
        console.log('OK')

    }

    if ((speed > 70) && (speed % 5 === 0)) {
        let count = (speed / 5);
        if (count <= 12) { console.log('you have ' + count + 'demerits') }
        else { console.log('You have 12 or more demerits. Your license is suspended') }
    }
}

speed(180);