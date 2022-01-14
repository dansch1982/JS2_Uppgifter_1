/* Skriv en funktion factorial(n) som räknar ut fakulteten för ett
heltal med en loop. Fakulteten tar man genom att multiplicera talet
med alla mindre tal ner till 1. Exempel: 1!	==	1,	2!	==	2*1,	4!	
==	4*3*2*1 osv.

Skriv en ny funktion som beräknar fakulteten rekursivt */

function fourteen(input) {
    const output = document.getElementById(arguments.callee.name)

    if (isNaN(input)) {
        return output.textContent = `${input} är ingen siffra.`
    }

    input = Math.floor(input)

    const number = factorial(input)

    /* let number = input;

    let i = input
    while (i > 1) {
        i--
        number *= i
    } */

    output.textContent = number
}

function factorial(number) {
    if (number < 1) {
        return 0
    } else if (number === 1) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}