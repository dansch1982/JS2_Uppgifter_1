/* Skriv ett program som har talet 65536 i en variabel. Så länge som
variabeln är större än 2 ska programmet loopa, skriva ut talet och
sedan dela variabeln med 2. */

function six() {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = ""
    let number = 65536;
    while (number !== 1) {
        output.textContent += number
        number /= 2
    }
}