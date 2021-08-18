console.log("pradzia");

function randomLater(ms, cb) {
    setTimeout(() => {
        cb(Math.trunc(Math.random() * 10 + 1)); // math.trunc grazina sveikaji skaiciu, be kablelio
    }, ms);
}

randomLater(500, (val) => {
    console.log(val);
});

console.log("pabaiga");