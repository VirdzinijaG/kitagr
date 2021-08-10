let o = { 
    savybe: "reiksme"
};

console.log(o); // atspausdins objekta

let a = {}; // tuscias objektas

console.log(a.labas); // undefind, nes objektas savybes labas neturi

a.labas = "Hello";

console.log(a.labas); // atspausdins Hello, nes rado objekte savybe labas

a.labas = "Hi";
console.log(a.labas); // spausdins Hi, nes savybe buvo pakeista is Hello i Hi

console.log(a); // spausdina objekta, kuriame iterpta savybe labas

a.savybe = "reiksme";
console.log(a); // objektas su nauja savybe, objektas turi dabar dvi savybes



let pav = "Labas";
console.log(a[pav]);
console.log(a["savybe"]); //spaudina reiksme

a.kitaSavybe = 654;
console.log(a); // objektas su trim savybem

delete a.savybe; // istrinta is objekto savybe
console.log(a);

delete a["kitaSavybe"]; // istrinta is objekto savybe, kitu uzrasymu
console.log(a);


