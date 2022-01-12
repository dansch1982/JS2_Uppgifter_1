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