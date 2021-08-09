function testas() {
    console.log("testas");
}
testas(); // iskviestu funkcija ir atspausdintu testas

// testas = 5; // kintamajam testas priskirtas 5

// testas(); // testas is not a function

testas = function labas() {
    console.log("labas");
};

testas();

// labas(); // labas is not defined