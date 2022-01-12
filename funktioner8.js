function eight() {
    const output = document.getElementById(arguments.callee.name)
    eight.textContent = ""
    let number = prompt('Skriv in ett tal')
    while (number > 2) {
        number = number % 2 === 0 ? number / 2 : number * 3 + 1
        output.textContent += number
    }
}