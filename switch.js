// switch labai panasus i if

let a = 4; // spausdins nuo case 4 ketvirtadienis ir iki galo // kai naudojama break, atspasudins tik ketvirtadienis
// let a = 1; atspausdind tik case1 pirmadienis ir baigs darba, nes naudojama break
// let a = 8; spausdins default reiksme nera tokios dienos ir tes toliau darba arba iki pabaigos arba break

switch (a) {
    default:
        console.log("nera tokios dienos");
    case 1:
        console.log("pirmadienis");
        break; // suranda nuo kurios vietos pradeti vykdyti ir nutraukia
    case 2:
        console.log("antradienis");
        break;
    case 3:
        console.log("treciadienis");
        break;
    case 4:
        console.log("ketvirtadienis");
        break;
    case 5:
        console.log("penktadienis");
        break;
    case 6:
        console.log("sestadienis");
        break;
    case 7:
        console.log("sekmadienis");
        break;
}


// let b = 4; vykdo visus case iki break
// let b = 7; vykdo po break visus case iki sekancio break
let b = 8; // vykdo p break default, nes nera tokio case

switch (b) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Darbo diena");
        break;
    case 6:
    case 7:
        console.log("Savaitgalis");
        break;
        default: 
        console.log("Nera tokios savaites dienos");
        break;
}