// soal 1 - release 0
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }

    get legs() {
        return this._legs;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }

    set legs(amount) {
       this._legs = amount; 
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
// end of soal 1 - release 0

console.log()

// soal 1 - release 1
class Ape extends Animal {
    constructor(name, amount = 2) {
        super(name);
        this._legs = amount;
    }

    yell() {
        console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
// end of soal 1 - release 1

console.log()

// soal 1
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      const date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      const output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  const clock = new Clock({ template: 'h:m:s' });
  clock.start();

// end of soal 1