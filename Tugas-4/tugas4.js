// soal 1
console.log("LOOPING PERTAMA");
var i = 2;
while(i <= 20) {
    console.log("%d - I love coding", i);
    i += 2;
}

console.log("LOOPING KEDUA");
var j = 20;
while (j >= 2) {
    console.log("%d - I will become a frontend developer", j);
    j -= 2;
}

// end of soal 1

console.log()

// soal 2
for (var i = 1; i <=20; i++) {
    if (i % 3 == 0 && i % 2 != 0) {
        console.log("%d - I Love Coding", i);
    } else if (i % 2 != 0) {
        console.log("%d - Santai", i);
    } else {
        console.log("%d - Berkualitas", i);
    }
}
// end of soal 2

console.log()

// soal 3
for (var i = 1; i<=7; i++) {
    var triangle = '';
    for (var j = 0; j < i; j++) {
        triangle += '#';
    }

    console.log(triangle);
}
// end of soal 3

console.log()

// soal 4
var kalimat="saya sangat senang belajar javascript"

console.log(kalimat.split(" "));
// end of soal 4

console.log()

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sortedFruits = daftarBuah.sort();

for (var i = 0; i<sortedFruits.length; i++) {
    console.log(sortedFruits[i]);
}
// end of soal 5