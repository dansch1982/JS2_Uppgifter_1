/* Skriv ett program som frågar användaren efter ett tal.
Programmet ska loopa så länge som talet är större än 2. Varje loop
ska programmet välja: om talet är udda, multiplicera talet med 3
och lägg till 1. Om talet är jämnt, dela det med 2. Skriv ut det nya
talet varje varv i loopen.
9 */

function eight() {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = ""
    let number = prompt('Skriv in ett tal')
    while (number > 2) {
        number = number % 2 === 0 ? number / 2 : number * 3 + 1
        output.textContent += number
    }
}