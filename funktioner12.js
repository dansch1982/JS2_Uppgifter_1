function twelve(amount) {
    const output = document.getElementById(arguments.callee.name)

    if (isNaN(amount)) {
        return output.textContent = `${amount} är ingen siffra.`
    }
    amount = Math.floor(amount)
    let number = 0;
    for (let index = 0; index < amount; index++) {
        number += index + 1
    }
    output.textContent = number
}