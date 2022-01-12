function thirteen(input) {
    if (!input) return
    const output = document.getElementById(arguments.callee.name)
    let string = "";
    for (let index = 0; index < input.length; index++) {
        string += input[input.length - (index + 1)]
    }
    output.textContent = string
}