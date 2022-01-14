/* Skriv en rekursiv funktion som summerar alla tal i en lista. Tips:
låt funktionen ta två parametrar, listan och en variabel med namnet
index som har defaultvärde 0.
Skriv en rekursiv funktion som returnerar det minsta talet i en
lista. */

function seventeen() {
    const output = document.getElementById(arguments.callee.name)

    const array = []

    let number = prompt("Skriv in en siffra")

    while (number && !isNaN(number)) {
        array.push(number)
        number = prompt("Skriv in en siffra")
    }

    output.textContent = combine(array) + "\n"
    output.textContent += "Lägsta input var: " + returnLowest(array)
}

function combine(array) {
    copyArray = [...array]
    if (copyArray.length === 1) {
        return copyArray[0]
    } else {
        copyArray[0] = parseFloat(copyArray[0]) + parseFloat(copyArray.pop())
        return combine(copyArray)
    }
}
function returnLowest(array) {
    copyArray = [...array]
    if (copyArray.length <= 1) {
        return copyArray[0]
    } else {
        parseFloat(copyArray[0]) < parseFloat(copyArray[copyArray.length-1]) ? copyArray.pop() : copyArray.shift()
        return returnLowest(copyArray)
    }
}