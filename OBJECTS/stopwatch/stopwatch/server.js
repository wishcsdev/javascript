'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

function stopwatch () {
    //abstraction -> create variable functions inaccessible from outside
    let starttime, stoptime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('already running');
        running = true;
        starttime = new Date();
    };

    this.stop = function () {
        if (!running)
            throw new Error('Already stopped.');
        running = true;
        stoptime = new Date();

        const seconds = stoptime.getDate() - starttime.getDate();
        duration += seconds;
    };

    this.reset = function () {
        this.starttime = null;
        this.stoptime = null;
        this.running = false;
        this.duration = 0;
    };
    //getter and setter functions for getting value of duration
    //you don't want a user to manually change duration -> hack
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(stopwatch());
}).listen(port);
