'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//show all properties of Object 
bankAccount = {
    'Name': 'James Bond',
    'ID': 12345,
    'Address': "1234 Toronto Avenue",
    'email': 'abcd@gmail.com'
};

function showProperties (account) {
    for (var prop in bankAccount) {
        console.log(prop +' '+ bankAccount[prop])
    } 
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(showProperties(bankAccount));
}).listen(port);
