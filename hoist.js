// hoistingas

// kai kintamasis yra sukuriamas, jis automatiskai gauna reiksme undefind
var i;
// jei kintamasis butu nenurodytas 
// console.log atspausdintu i is not defined

console.log(i); // undefind atsaupsdins

// veliau kintamajam priskirta reiksme
i = 7; // priskirimas

console.log(i); // atspausdins 7

// var i; nurodzius cia kintamaji, vis tiek spausdintu pagal nurodytas salygas, undefind ir 7, del hoistinimo
// nepriklausomai, kurioje vietoje yra kintamasis, bet su var, ji suranda


console.log(a); // undefind, nes kintamasis nurodytas veliau

a = 8; // priskirimas

console.log(a); // 8

var a = 15;

console.log(a); // 15, nes a reiksme pakeista is 8 i 15

// su var kintamojo pavadinimai gali kartotis, siuo atveju vykdys priskirima ir spausdins 21
var a = 21;
console.log(a);

// hoistingas atliekamas tik tai kintamiesiems, kurie yra deklaruoti su var


// let atsiranda ne hoistinimo metu, o programos vykdymo metu
let b;

console.log(b); // undefind

b = 10;
console.log(b); // 10

{
    let c = 20;
    console.log(b, c);
    {
        let d = 30;
        var e = 40;
        let b = 50;
        console.log(b, c, d, e) ; // 50 20 30 40 spausdina skaupo reiksmes
    }
}
console.log(b, e); // atspausdina b=10, nes main skaupe ir e=40, nes deklaruota su var ir buvo hoistinamas
// console.log(b,c); mes klaida c is not defined at Object.<anonymous>
// kintamaji b rado main skaupe, kintamojo c nerado, nes jis kitame skaupe, skaipas baigias ir dingsta kintamojo reiksme

