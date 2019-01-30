'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const value = [5,6,7,8];
function sum(...args) {     //spread operator aka REST for functions returns an array!
    if (args.length === 1 && Array.isArray(args[0]))
        // if first argument an array then reset it to just an array
        // otherwise you will have array of an array
        args = [...args[0]];     

    console.log(args.reduce((accumulator, current) => accumulator + current));
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(sum(value));
}).listen(port);
