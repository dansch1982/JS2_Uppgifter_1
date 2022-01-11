function two() {
    const number = prompt('Skriv in en siffra:');
    if (number < 100) {
        alert(`${number} är lägre än 100`)
    } else if (number > 100) {
        alert(`${number} är högre än 100`)
    } else {
        alert(`${number} är 100`)
    }
}