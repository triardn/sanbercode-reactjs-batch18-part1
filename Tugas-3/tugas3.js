// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama.concat(" ").concat(kataKedua.substring(0,1).toUpperCase().concat(kataKedua.substring(1))).concat(" ").concat(kataKetiga).concat(" ").concat(kataKeempat.toUpperCase()));
// end of soal 1

console.log();

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var intPertama = parseInt(kataPertama);
var intKedua = parseInt(kataKedua);
var intKetiga = parseInt(kataKetiga);
var intKeempat = parseInt(kataKeempat);

var jumlah = intPertama + intKedua + intKetiga + intKeempat;

console.log(jumlah);
// end of soal 2

console.log();

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
// end of soal 3

console.log();

// soal 4
var nilai;
nilai = 80;

if (nilai >= 80) {
    console.log("Indeksnya A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeksnya B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indeksnya C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeksnya D");
} else {
    console.log("Indeksnya E");
}
// end of soal 4

console.log();

// soal 5
var tanggal = 29;
var bulan = 4;
var tahun = 1992;

var bulanStr = '';

switch (bulan) {
    case 1:
        bulanStr = "Januari";
        break;
    case 2:
        bulanStr = "Februari";
        break;
    case 3:
        bulanStr = "Maret";
        break;
    case 4:
        bulanStr = "April";
        break;
    case 5:
        bulanStr = "Mei";
        break;
    case 6:
        bulanStr = "Juni";
        break;
    case 7:
        bulanStr = "Juli";
        break;
    case 8:
        bulanStr = "Agustus";
        break;
    case 9:
        bulanStr = "September";
        break;
    case 10:
        bulanStr = "Oktober";
        break;
    case 11:
        bulanStr = "November";
        break;
    case 12:
        bulanStr = "Desember";
        break;
    default:
        bulanStr = "Invalid";
}

console.log(`${tanggal} ${bulanStr} ${tahun}`)
// end of soal 5