'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

// Given an array, move item by index using an offset
// must be able to handle negative offsets.
//give error if offset too big
const elements = [23, 24, 45, 21];

function move(elements, index, offset) {
    if (Math.abs(offset) <= elements.length) {
        const value = elements[index];
        elements.splice(index, 1);                      //go to index, delete 1 element only 
        const newposition = index + offset;
        elements.splice(newposition, 0, value);         //go to index, delete 0 items,add element to array
    }
	else {
        console.error("invalid offset");
    }
    console.log(elements);
}


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(move(elements, 0, -10));
}).listen(port);
