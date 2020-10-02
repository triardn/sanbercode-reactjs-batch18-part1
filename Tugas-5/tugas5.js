// soal 1
function halo() {
    return "Halo Sanbers!";
}
 
console.log(halo()) // "Halo Sanbers!" 
// end of soal 1

console.log()

// soal 2
function kalikan(a, b) {
    return a * b;
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48
// end of soal 2

console.log()

// soal 3
function introduce(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"
// end of soal 3

console.log()

// soal 4
function transformArray(arr) {
    return person = {
        nama: arr[0],
        jenis_kelamin: arr[1],
        hobi: arr[2],
        tahun_lahir: arr[3],
    }
}

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

console.log(transformArray(arrayDaftarPeserta))
// end of soal 4

console.log()

// soal 5
var fruits = [
    {
        name: "strawberry",
        color: "merah",
        has_seeds: "tidak",
        price: 9000,
    },
    {
        name: "jeruk",
        color: "oranye",
        has_seeds: "ada",
        price: 8000,
    },
    {
        name: "Semangka",
        color: "Hijau & Merah",
        has_seeds: "ada",
        price: 10000,
    },
    {
        name: "Pisang",
        color: "Kuning",
        has_seeds: "tidak",
        price: 5000,
    },
]

console.log(fruits[0]);
// end of soal 5

console.log()

// soal 6
var dataFilm = [];

function addFilm(name, duration, genre, year) {
    var film = {
        title: name,
        duration: duration,
        genre: genre,
        year: year,
    }

    dataFilm.push(film);
}

addFilm("Avenger: Endgame", 213, "Action", 2019);
addFilm("Spiderman: Far From Home", 173, "Action", 2019);
addFilm("The Nun", 169, "Horror", 2018);

console.log(dataFilm);
// end of soal 6