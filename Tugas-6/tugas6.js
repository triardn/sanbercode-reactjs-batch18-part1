// soal 1
const calculate = (type, radius) => {
    let area = 0;
    const phi = 22/7;

    switch (type) {
        case "area": // luas
            area = phi * radius * radius;
            break;
        case "circumference": // keliling
            area = 2 * phi * radius; 
            break;
        default:
    }

    return area;
}

console.log(calculate("area", 7));
console.log(calculate("circumference", 7));
// end of soal 1

console.log();

// soal 2
let kalimat = "";

const appendString = (str) => {
    if (kalimat == "") {
        kalimat = str;
    } else {
        kalimat = `${kalimat} ${str}`;
    }
}

appendString("saya");
appendString("adalah");
appendString("seorang");
appendString("frontend");
appendString("developer");

console.log(kalimat);
// end of soal 2

console.log();

// soal 3
const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
}
   
newFunction("William", "Imoh").fullName() 
// end of soal 3

console.log();

// soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation } = newObject;

console.log(firstName, lastName, destination, occupation);
// end of soal 4

console.log();

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];

console.log(combined);
// end of soal 5