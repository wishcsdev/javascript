'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//Check speed of car where speed limit is 70
//if speed <=70 OK message 
//for every 5 over the driver gets 1 point
//Use floor function from Math
// More than 12 points then License suspended
function speed(number) {
    let speed = Math.floor(number);
    let speedLimit = 70;
    if (speed < speedLimit +5) {
        return ('OK');

    }

    if (speed > speedLimit) {
        let speedDiff = speed - speedLimit;
        let points = (speedDiff / 5);
        if (points <= 12)
        { return ('You have ' + points + ' demerits') }
        else
        { return ('You have ' + points + ' Demerits\n' + 'Your license is suspended') };
    }
}



http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.write(speed(80));
    res.end(speed(300));
}).listen(port);
