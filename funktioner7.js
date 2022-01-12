function seven() {
    const output = document.getElementById(arguments.callee.name)
    let string = "";
    let word = prompt('Skriv in ett ord')
    while (word !== "." && word) {
        string += word + " "
        word = prompt('Skriv in ett ord')
    }
    
    string = word === "." ? string.trim() + word : string.trim()
    
    if (string) {
        output.textContent = string;
    }
}