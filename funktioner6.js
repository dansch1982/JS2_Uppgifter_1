function six() {
    const six = document.getElementById('six');
    six.textContent = ""
    let number = 65536;
    while (number !== 1) {
        six.textContent += number
        number /= 2
    }
}