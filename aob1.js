/**
 * 
 * @param {Array} array 
 * @param {number} number
 */

function one(array, number) {
    const output = document.getElementById(arguments.callee.name)
    array = bubbleSort(array)
    let longest = Math.max(...array.map(item => item.toString().length))
    let fullText = ""
    for (let i = 0; i < array.length; i++) {
        let text = array[i] + " "
        const length = array[i].toString().length
        if (length < longest) {
            text = "0".repeat(longest-length) + text
        }
        if (i%number === 0 && i > 0) {
            text = "\n" + text
        }
        fullText += text
    }

    output.textContent = fullText
}

/**
 * 
 * @param {Array} array 
 */
function bubbleSort(array) {

    let copyArray

    while (copyArray !== array.join()) {
        copyArray = array.join()
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                array.splice(i+1,0,array.splice(i,1)[0])
            }
        }
    }

    return array
}

function mergeSort(array) {
    return array
}

console.log(mergeSort([6,5,3,1,8,7,2,4]))