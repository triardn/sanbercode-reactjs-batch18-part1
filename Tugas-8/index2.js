var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
]

// soal 2
let time = 10000
let index = 0

const reading = function(time) {
    readBooksPromise(time, books[index])
    .then(function(spareTime) {
        time = spareTime
        index++

        if (index < books.length && time > 0) {
            reading(time)
        }
    })
    .catch(function(spareTime) {
        console.log(`sisa waktu saya ${spareTime}`)
    })
}

reading(time)
// End of soal 2
