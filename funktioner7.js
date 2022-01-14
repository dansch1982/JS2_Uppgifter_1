/* Skriv ett program som loopar och frågar användaren efter en
sträng. Så länge som strängen inte är en tom sträng så ska
programmet lägga ihop den med tidigare strängar, med ett
mellanrum. Om användaren t.ex. har skrivit "ord1" tidigare och
skriver "ord2" ska den nya strängen bli "ord1	ord2". Fortsätt
loopa tills användaren skickar en tom sträng eller en punkt */

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