class Zmogus {
    constructor(vardas) {
        this.vardas = vardas;
    }

    labas() {
        console.log("Labas " + this.vardas);
    }
}

class Studentas extends Zmogus {

    constructor() {
        super(...arguments);
        this.pazymiai = [];
    }
}

// function Zmogus(vardas) {
//     this.vardas = vardas;
// }

// Zmogus.prototype.labas = function() {
//     console.log("Labas " + this.vardas);
// };
// Zmogus.prototype.blogasLabas = () => {
//     console.log("Blogas Labas " + this.vardas);
// };
// // arrow neturi savo this. todel atspausdins Blogas Labas undefind

// function Studentas() {
//     Zmogus.apply(this, arguments);
//     this.pazymiai = [];
// }

let z = new Zmogus("Jonas");

z.labas();
// z.blogasLabas();

let s = new Studentas("Petras");
console.log(s);
s.labas();