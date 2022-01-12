function six() {
    const output = document.getElementById(arguments.callee.name)
    six.textContent = ""
    let number = 65536;
    while (number !== 1) {
        output.textContent += number
        number /= 2
    }
}