// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000},
];
 
// soal 1
let time = 10000;
let index = 0;

const callback = function (spareTime) {
    time = spareTime;
    index++;

    if (index < books.length) {
        readBooks(time, books[index], callback);
    }
}

readBooks(time, books[index], callback);
// end of soal 1