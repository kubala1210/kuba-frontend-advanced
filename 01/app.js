
/* rozwiązanie z pętlą for */
let x = Number(prompt('Podaj liczbę od 1 do 9: '));

if (x >= 1 && x <= 9) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${x} x ${i} = ${x * i}`)
    };
} else {
    console.log('Podaj liczbę w przedziale 1-9!')
};


/* rozwiązanie z pętlą while  */

let base = Number(prompt('Podaj podstawę potęgi: '));
let power = Number(prompt('Podaj wartość potęgi: '));
let number = 1;

if (!isNaN(base) && !isNaN(power) && power > 0) {
    while (power) {
        number = number * base;
        power -= 1;
    };
} else {
    console.log('Podaj poprawną liczbę!')
}

console.log(number);