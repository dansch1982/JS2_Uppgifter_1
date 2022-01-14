function fifteen(input) {

    input = isNaN(Math.floor(input)) ? Math.floor(input) : fibonacci(Math.floor(input))
    output.textContent = input
}

function fibonacci(number) {
    return number < 2 ? number : fibonacci(number - 1) + fibonacci(number - 2)
}