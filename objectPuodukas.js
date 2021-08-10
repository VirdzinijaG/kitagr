// sukurtas objektas su pradinemis reiksmemis
let puodukas = {
    spalva: "baltas",
    turis: 250,
    kiekis: 0
};

let kitasPuodukas = {
    spalva: "rudas",
    turis: 300,
    kiekis: 0
};

console.log(puodukas, kitasPuodukas);
console.log("--------------");

// funkcija naudojama sukurti puoduka, naudojama kaip konstruktorius
// funkcija, kuri naudojama kaip konstruktorius pavadinimas rasomas is didziosios raides
function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
    this.ipilk = function(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.turis) {
            this.kiekis = this.turis
        }
    }
    this.isgerk = function(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            this.kiekis = 0;
        }
    }
}

// sukuriami nauji puoduka, naudojant funkcija Puodukas, nurodant tik tam tikrus parametrus
// operatorius new sukuria nauja objekta ir kviecia funkcija Puodukas
let p1 = new Puodukas("raudonas", 250);
let p2 = new Puodukas("juodas", 300);

console.log(p1, p2);

p1.ipilk(100);
p1.isgerk(20);

console.log(p1);

// konstruktoriaus funkcija
let Masina = function(pavadinimas) {
    this.pavadinimas = pavadinimas;
    this.greitis = 0;
    this.kelias = 0;
};

let m = new Masina("Ford");
console.log(m);
