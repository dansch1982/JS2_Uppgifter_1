/* Skriv en funktion som tar fyra tal som parametrar. Den ska
multiplicera de tre första och lägga ihop resultatet med den fjärde.
Använd funktionerna add och multi. */

function ten() {
    const output = document.getElementById(arguments.callee.name)
    const array = new Array();
    let number = prompt('Skriv in en siffra')
    while (number && !isNaN(number)) {
        array.push(parseFloat(number))
        number = prompt('Skriv in en siffra')
    }
    output.textContent = multiAdd(array)
}

function multiAdd(...params) {
    if (Array.isArray(params[0])) {
        params = params[0]
    }
    if (params.length === 0) {
        return 0
    } else if (params.length === 1) {
        return params[0]
    } else if (params.length === 2) {
        return add(params[0], params[1])
    } else {
        const a = params.shift()
        const b = params.shift()
        params.unshift(multi(a, b))
        return multiAdd(params)
    }
}

function add(a = 0, b = 0) {
    if (isNaN(a + b)) {
        return 0
    } else {
        return a + b
    }
}

function multi(...params) {
    let number;
    if (params.length === 0) {
        return 0
    }
    params.forEach(param => {
        number = isNaN(number) ? param : number * param
    })
    return isNaN(number) ? 0 : number
}