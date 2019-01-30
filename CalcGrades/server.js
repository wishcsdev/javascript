'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
// Calc grade average and give letter grade

const grades = [88, 20, 55, 67, 80, 0];

function gradeCalc(grade) {
    var total =0;
    for (let g of grades) {
        total += g;
    }
    var average = total / grades.length;
    if (average >= 80) { console.log("You receiver A+"); } 
    else if (average >= 50) { console.log("You receiver B+"); }
    else { console.log("You Failed");}
}


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(gradeCalc(grades));
}).listen(port);
