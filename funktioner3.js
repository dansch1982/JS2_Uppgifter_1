/* Skriv ett program som frågar användaren efter ett tal mellan 1
och 100. Programmet ska ha ett hemligt tal lagrat i en variabel. Det
ska fortsätta fråga användaren till dess att användaren gissar det
hemliga talet. Om man gissade för högt eller för lågt så ska det
skrivas ut, så att användaren har en rimlig chans att klara det.
Exempel: programmet har det hemliga talet 27. Användaren gissar
på 50. Programmet skriver ut att användaren gissade för högt.
Användaren gissar därefter på 20. Programmet skriver ut att det var
för lågt. Användaren gissar slutligen på 27. Programmet skriver ut
att det var rätt och avslutas.
Extra utmaning: slumpa det hemliga talet med hjälp av
Math.random och farbror google. Spara antalet gissn */

function three() {
    const output = document.getElementById(arguments.callee.name)
    const secret = Math.floor(Math.random() * 100)
    let guess = prompt("Gissa en siffra")
    while (guess && !isNaN(guess) && guess != secret) {
        if (guess < secret) {
            guess = prompt("Den hemliga siffran är högre än " + guess)
        } else {
            guess = prompt("Den hemliga siffran är lägre än " + guess)
        }
    }
    if (guess && !isNaN(guess)) {
        output.textContent = "Grattis, den hemliga siffran var " + secret
    }
}