function seven() {
    const seven = document.getElementById('seven')
    let string = "";
    let word = prompt('Skriv in ett ord')
    while (word !== "." && word) {
        string += word + " "
        word = prompt('Skriv in ett ord')
    }
    
    string = word === "." ? string.trim() + word : string.trim()
    
    if (string) {
        seven.textContent = string;
    }
}