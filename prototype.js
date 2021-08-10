function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
}

// su prototype prisedejo prie objekto funkcijos savybe ipilk
Puodukas.prototype.ipilk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.turis) {
        this.kiekis = this.turis
    }
};

// su prototype prisedejo prie objekto funkcijos savybe isgerk
Puodukas.prototype.isgerk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
        this.kiekis = 0;
    }
};

let p1 = new Puodukas("geltonas", 500);
console.log(p1);

p1.ipilk(420);
console.log(p1);
p1.isgerk(150);
console.log(p1);


// Paveldejimas nuo puoduko konstruktoriaus
function Termosas(spalva, turis) {
    Puodukas.call(this, spalva, turis) // call pakisa konteksta
    this.temp = 20;
}
Termosas.prototype = Object.create(Puodukas.prototype);
// Object.create sukuria nauja objekta, kurio proto rodo i puoduko prototype
Termosas.prototype.constructor = Termosas;
// sukuria savybe constructor ir rodys atgal i funckija termosas


Termosas.prototype.pasildyk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.temp += kiek;
}

Termosas.prototype.atvesink = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.temp -= kiek;
}

let t1 = new Termosas("Zalias", 1000);
console.log(t1);

t1.pasildyk(40);
console.log(t1);

t1.atvesink(10);
console.log(t1);

t1.ipilk(500);
console.log(t1);

t1.isgerk(230);
console.log(t1);
