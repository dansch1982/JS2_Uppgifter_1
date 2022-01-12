function five() {
    const output = document.getElementById(arguments.callee.name)
    five.textContent = ""
    for (let index = 0; index < 16; index++) {
        output.textContent += index+1
    }
}