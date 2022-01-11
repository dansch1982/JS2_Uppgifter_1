function three() {
    const secret = Math.floor(Math.random() * 100)
    let guess = prompt("Gissa en siffra")
    while (guess != secret) {
        if (guess < secret) {
            alert("Den hemliga siffran är högre än " + guess)
        } else {
            alert("Den hemliga siffran är lägre än " + guess)
        }
        guess = prompt("Gissa en siffra")
    }
    alert("Grattis, den hemliga siffran var " + secret)
}