//9a Vad kommer följande kod att skriva ut?
function nine() {
    const output = document.getElementById(arguments.callee.name)
    output.textContent = null;
    const array = [
        (i, j,) => (i + j) % 2 === 0,
        (i, j,) => j === 0,
        (i, j,) => i === j,
        (i, j,) => j >= 2 && j <= 4,
        (i, j,) => j === 2 || i === 2,
        (i, j,) => j === 5 - i || j === 4,
        (i, j,) => j === 5 - i || j === i,
    ]
for (let index = 0; index < array.length; index++) {
    const check = array[index];
    const span = document.createElement("span")
    let text = "";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 8; j++) {
            if (check(i,j)) {
                text += "*"
            } else {
                text += "."
            }
        }
        text += "\n"
    }
    span.textContent = text
    output.appendChild(span)
}
/*     let text = '';
    const array = []
    const object = {
        "A": (i, j) => {
            return (i + j) % 2 === 0;
        },
        "B": (i, j) => {
            return j === 0;
        },
        "C": (i, j) => {
            return i === j;
        },
        "D": (i, j) => {
            return j >= 2 && j <= 4;
        },
        "E": (i, j) => {
            return j === 2 || i === 2;
        },
        "F": (i, j) => {
            return j === 5 - i || j === 4;
        },
        "G": (i, j) => {
            return j === 5 - i || j === i;
        },
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 8; j++) {
            ["A", "B", "C", "D", "E", "F", "G"].forEach(letter => {
                if (!array[letter]) array[letter] = []
                if (object[letter](i, j)) {
                    array[letter].push("#")
                } else {
                    array[letter].push(".")
                }
            })
        }
        ["A", "B", "C", "D", "E", "F", "G"].forEach(letter => {
            text += (array[letter].join().replace(/,/g, "").substring(i * 8, i * 8 + 8))
            text += " ".repeat(3)
        })
        text += "\n"
    }
    output.textContent = text */
}