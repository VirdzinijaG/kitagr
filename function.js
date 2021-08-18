"use strict";

function labas(vardas, pavarde) {
    console.log("Labas", vardas, pavarde);
}

labas("Jonas", "Jonaitis"); // Labas Jonas Jonaitis
labas("Jonas"); // Labas Jonas undefined
labas(); // Labas undefined undefined
labas("Jonas", "Jonaitis", "Ponas"); // Labas Jonas Jonaitis undefined
labas(undefined, "Jonaitis", "Jonas"); // Labas undefined Jonaitis

console.log("---------");

function labas1(vardas, pavarde = "Bepavardis") {
    console.log("Labas", vardas, pavarde);
    console.log("arguments", arguments);
}

labas1("Jonas", "Jonaitis"); // Labas Jonas Jonaitis
labas1("Jonas"); // Labas Jonas Bepavardis // paimta reiksme is funkcijos
labas1(); // Labas undefined Bepavardis
labas1("Jonas", "Jonaitis", "Ponas"); // Labas Jonas Jonaitis undefined
labas1(undefined, "Jonaitis", "Jonas"); // Labas undefined Jonaitis

console.log("---------");

function labas2(vardas = "Bevardis", pavarde = "Bepavardis") {
    console.log("Labas", vardas, pavarde);
    console.log("arguments", arguments);
}

labas2("Jonas", "Jonaitis"); // Labas Jonas Jonaitis
labas2("Jonas"); // Labas Jonas Bepavardis // paimta reiksme is funkcijos
labas2(); // Labas Bevardis Bepavardis
labas2("Jonas", "Jonaitis", "Ponas"); // Labas Jonas Jonaitis undefined
labas2(undefined, "Jonaitis", "Jonas"); // Labas Bevardis Jonaitis


console.log("-----------");

let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    labas: () => {
        console.log("Labas", this.vardas, this.pavarde);
    }
}

zmogus.labas() // Labas undefined undefined

// arrow funkcija this neturi ir grazina undefined
// ne arrow funckija turi savo this ir atspausditnu Labas Jonas Jonaitis
// i prototype nedeti arrow function

