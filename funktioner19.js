function nineteen(string, element) {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = find(string, element)
}

function find(string, element) {
    if (Array.isArray(element)) {
        return element.some(e => e.textContent.includes(string))
    } else {
        element = Array.from(element.getElementsByTagName("*"))
        return find(string, element)
    }
}

function findTwo(string, element = document.body) {
    if (element.textContent.includes(string)) return true

    if (element.firstElementChild) {
        findTwo(string, element.firstElementChild)
    }

    if (element.nextElementSibling) {
        findTwo(string, element.nextElementSibling)
    }
}