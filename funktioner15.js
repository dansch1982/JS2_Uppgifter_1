/* Fibonacci-tal är en talserie som börjar med 0, 1. Sedan får man
nästa tal i talserien genom att lägga ihop de två föregående.
Exempel: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, … Skriv en funktion
fibonacci(n) som beräknar det n:te Fibonacci-talet rekursivt.
Extrauppgift: gör en funktion som räknar ut det med en loop. */

function fifteen(input) {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = "Rekursiv: "
    output.textContent += isNaN(Math.floor(input)) ? Math.floor(input) : fibonacci(Math.floor(input))
    output.textContent += "\nLoopad: "
    output.textContent += isNaN(Math.floor(input)) ? Math.floor(input) : fibonacciLoop(Math.floor(input))
}

function fibonacci(number) {
    return number < 2 ? number : fibonacci(number - 1) + fibonacci(number - 2)
}

function fibonacciLoop(number) {
    let num1 = 0
    let num2 = 1
    let num3 = 0
    for (let index = 0; index < number; index++) {
        num3  = num1 + num2
        num2  = num1 + num2
        num1 = num2 - num1
    }
    return num1
}