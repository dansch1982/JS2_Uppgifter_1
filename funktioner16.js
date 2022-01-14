/* Skriv en rekursiv funktion som tar en sträng som parameter och
returnerar en ny sträng, som är den gamla strängen baklänges.
Tips: använd string.substring(). */

function sixteen(input) {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = reverse(input)
}

function reverse(string) {
    if (!string) {
        return "";
    } else {
        return reverse(string.substring(1)) + string[0];
    }
}