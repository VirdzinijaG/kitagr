class Puodukas {
    constructor(spalva, turis) {
        this.spalva = spalva;
        this.turis = turis;
        this.kiekis = 0;
    }
    ipilk(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.turis) {
            this.kiekis = this.turis
        }
    }
    isgerk(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            this.kiekis = 0;
        }
    }
}

console.log(typeof Puodukas); // spausdins function // Puoduko tipas
console.log(Puodukas); // spausdins objekta
console.log(Puodukas.toString()); // spausdina objekta su visomis savybemis

let p = new Puodukas("melynas", 320);
console.log(p);

console.log(Object.getOwnPropertyNames(Puodukas.prototype));
// atspausdins visas puoduko prototipe esancias savybes


// paveldejimas nuo klases Puodukas
class Termosas extends Puodukas {
    constructor(spalva, turis) {
        super(spalva, turis)
        this.temp = 25;
    }
    pasildyk(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.temp += kiek;
    }
    atvesink(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.temp -= kiek;
    }
}

let t = new Termosas("violetinis", 2500);
console.log(t);

t.pasildyk(30);
console.log(t);

t.atvesink(10);
console.log(t);