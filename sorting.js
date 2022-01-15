const bubble = document.getElementById('bubble')
bubble.addEventListener('click', function() {
    const output = this.nextSibling.nextSibling

    const startTime = performance.now()
    one(getRandomArray(10000,1000),30, bubbleSort, output)
    const endTime = performance.now()
    const time = (endTime - startTime).toFixed(2)
    output.textContent = `Bubble Sort took ${time} milliseconds\n` + output.textContent
})

const merge = document.getElementById('merge')
merge.addEventListener('click', function() {
    const output = this.nextSibling.nextSibling

    const startTime = performance.now()
    one(getRandomArray(10000,1000),30, mergeSort, output)
    const endTime = performance.now()
    const time = (endTime - startTime).toFixed(2)
    output.textContent = `Merge Sort took ${time} milliseconds\n` + output.textContent
})

const arraySort = document.getElementById('arraySort')
arraySort.addEventListener('click', function() {
    const output = this.nextSibling.nextSibling

    const startTime = performance.now()
    one(getRandomArray(10000,1000),30, javascriptSort, output)
    const endTime = performance.now()
    const time = (endTime - startTime).toFixed(2)
    output.textContent = `Array.sort() took ${time} milliseconds\n` + output.textContent
})

/**
 * 
 * @param {Array} array 
 * @param {number} number
 */

function one(array, number, func, output) {
    const longest = Math.max(...array.map(item => item.toString().length))
    array = func(array)
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
 * Bubblesort function
 * @param {Array} array - Array of unsorted numbers
 * @returns {Array} - Numerically sorted array
 */
function bubbleSort(array) {

    let copyArray

    while (copyArray !== array.join()) {
        copyArray = array.join()
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                /* array.splice(i+1,0,array.splice(i,1)[0]) */
                const tmp = array[i]
                array[i] = array[i+1]
                array[i+1] = tmp
            }
        }
    }

    return array
}

/**
 * Mergesort function
 * @param {Array} array - Array of unsorted numbers
 * @returns {Array} - Numerically sorted array
 */
function mergeSort(array) {

    const copyArray = [...array]
    array.length = 0

    while (copyArray.length>1) {
        if (copyArray[0] < copyArray[copyArray.length-1]) {
            array.push([copyArray.shift(), copyArray.pop()])
        } else {
            array.push([copyArray.pop(), copyArray.shift()])
        }
    }
    if (copyArray[0]) array.push([copyArray.pop()])

    while (array.length > 1) {
        for (let i = 0; i < array.length; i+=2) {
            copyArray.push(merge(array[i], array[i+1]))
        }
        array = [...copyArray]
        copyArray.length = 0
    }
    return array[0]

    /**
     * 
     * @param {Array} left - Array of unsorted numbers
     * @param {Array} right - Array of unsorted numbers
     * @returns {Array} - Combined array, numerically sorted
     */
    function merge(left = [], right = []) {
        const sorted = []
        while (left.length && right.length) {
            sorted.push(left[0] < right[0] ? left.shift() : right.shift())
        }
        return [...sorted, ...left, ...right]
    }
}

function javascriptSort(array) {
    array.sort((a,b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })
    return array
}

/**
 * 
 * @param {Number} amount - Amount of numbers in array
 * @param {Number} range - Range of numbers
 * @returns {Array} - An array of <amount> random numbers from 1 - <range>
 */
function getRandomArray(amount = 1, range = 1) {
    return Array(amount).fill().map(() => Math.floor(Math.random() * (range-1) + 1))
}

/* const array = getRandomArray(100,10000)
const copyArray = [...array]
console.log(copyArray.sort((a,b) => {
    if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      // a must be equal to b
      return 0;
}))
console.log(mergeSort(array)) */
