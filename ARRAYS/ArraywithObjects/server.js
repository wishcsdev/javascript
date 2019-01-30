'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//given array with objects, sort the movies in descending order of
    //their ratings and display title for movies in 2018 of rating>4 

const array = [
    { title: 'a', year: 2014, rating: 4.9 },
    { title: 'bbb', year: 2016, rating: 4.4 },
    { title: 'c', year: 2018, rating: 3.5 },
    { title: 'xcv', year: 2018, rating: 4.5 }
];

//function movie(arrays, rating) {
//    //arrays.sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
//    //console.log(arrays);
//    const array2 = [];
//    for (let movies of array) {
//        if (movies.rating >= rating) { array2.push(movies);}
//    }
//    array2.sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
//    console.log(array2);
//}

//EFFICIENT
//filter array by year property
//sort ascending, then reverse for descending 
const result = array 
    .filter(m => m.year === 2018 && m.rating>=4)
    .sort((a, b) => {a.rating - b.rating})
    .reverse()
    .map(m => m.title)      //map movie object m where picks only the title

console.log(result);


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(movie(array,4.5));
}).listen(port);
