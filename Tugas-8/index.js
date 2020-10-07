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
let runningOutOfTime = false;

const callback = function (spareTime) {
    index++;

    if (index < books.length && !runningOutOfTime && spareTime > 0) { // handling if there are more books but time = 0
        if (spareTime < books[index].timeSpent) {
            runningOutOfTime = true;    
        }

        readBooks(spareTime, books[index], callback);
    }
}

readBooks(time, books[index], callback);
// end of soal 1