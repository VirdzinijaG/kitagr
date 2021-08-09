let a = 1;

while (a < 5) {
    let b = 3;
    // console.log(a); spausdins ilgai vienetus 
    console.log(a++); // spausdina nuo 1 iki 4
    // console.log(a++ + b); spausdins 4 5 6 7 prides prie kikvieno po 3
}
// console.log(b);  b is not defined

let c = 1;

while (c < 3)
    console.log(c++);
console.log("Labas");
// atspausdins 1 2 ir labas, del patogumo rasoma { }

if (a < 100) { // -100 bandyta
    console.log("mazas"); //salyga false tai si komanda nevykdoma
    console.log("skaicius");
}
else
    console.log("didelis");
console.log("sk"); // atskira komanda nuo else ir ja spausdins
// else turi buti su if 


let d = 7;

if (d < 0) {
    console.log("neigiamas");
} else if (d === 0) {
    console.log("nulis");
} else if (d < 10) {
    console.log("mazas");
} else if (d < 100) {
    console.log("vidutinis");
} else {
    console.log("didelis");
}


let e = 8;

do {
    console.log(e++); // atspausdins 8 
} while (e < 3); // tada tikrina salyga

console.log("labas", e); // labas ir 9, nes buvo e++




for (let i = 1; i < 3; i++) {
    console.log(i); // atspausdins 1 2
}
// console.log("pabaiga", i);  i is not defined, nes jis apibreztas fot viduje
// ciklas for turi savo skaupa