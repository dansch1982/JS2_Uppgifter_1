function fifteen(input) {
    const output = document.getElementById(arguments.callee.name)

    input = Math.floor(input)
    
    //kod

    output.textContent = input
}