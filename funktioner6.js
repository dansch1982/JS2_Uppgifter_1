function six() {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = ""
    let number = 65536;
    while (number !== 1) {
        output.textContent += number
        number /= 2
    }
}