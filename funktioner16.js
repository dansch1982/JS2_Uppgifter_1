function sixteen(input) {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = reverse(input)
}

function reverse (string) {
    if (string === "") {
        return "";
    } else {
        return reverse(string.substringing(1)) + string.charAt(0);
    }
}