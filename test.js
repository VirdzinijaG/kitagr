/* Tipai
number
boolean
string 
visa kita js yra objektai
undefind
*/

// typeof parodo tipa 

let m = [1, 2, 3, 4];
console.log(typeof m); // masyva rodo kaip objekta

let sk = 1;
console.log(typeof sk); // number

let str = "tekstas";
console.log(typeof str); // string

let arTiesa = true;
console.log(typeof arTiesa); // boolean

let obj = {};
console.log(typeof obj); // object

let undef;
console.log(typeof undef); // undefind

let n = null;
console.log(typeof n); // null spausdins kaip object

let f = () => {};
console.log(typeof f); // function


let o1 = {
    pirma: 1,
    antra: 2
};

let o2 = o1; // o2 gauna reiksme o1

o1.trecia = 3; // prie objeto o1 prisideda trecia reiksme
o1.pirma = 11; // pirma reiksme 1 pakeiciama i 11

console.log(o2); // atspausdina objekta
