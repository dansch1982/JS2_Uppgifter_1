// Uppgift 1a1:
function buttonAction1() {
  //Kod här!
  alert(`
  Pling, plong!
  Klockan är: ${new Date().toLocaleTimeString('sv-se', { hour:"2-digit", minute:"2-digit" }) }
  `)
} // Slut!


function buttonActionTwoAndThree() {
  let string = ""
  const result3 = document.getElementById('result3')
  
  // Uppgift 1a2 här:
  function buttonAction2() {
    //Kode här
    string = prompt("Skriv in din text här:")
    alert(string.toUpperCase())
  } // Slut!

  // Uppgift 1a3 här:
  function buttonAction3() {
    //Kode här!
  if (string) {
    result3.textContent = string;
  }
  } // Slut!

  return [buttonAction2, buttonAction3]

}

const [buttonAction2, buttonAction3] = buttonActionTwoAndThree();

// Uppgift 1a4 här: 
function buttonAction4() {
  //Kode här!
  if (!this.time) {
    this.time = new Date()
    alert('Tidtagning startad.')
  } else {
    const newTime = new Date()
    const difference = (newTime.getTime() - this.time.getTime()) / 1000
    alert(`
    Sekunder sedan senaste klick:
    ${Math.floor(difference)}
    `)
    this.time = newTime
  }
} // Slut!

/* function functionContainer() {
  let date;
  function buttonAction4() {
    if (!date) {
      date = new Date()
    alert('Tidtagning startad.')
    } else {
      const newTime = new Date()
      const difference = (newTime.getTime() - date.getTime()) / 1000
      alert(`
      Sekunder sedan senaste klick:
      ${Math.floor(difference)}
      `)
      date = newTime
    }
  }
  return buttonAction4;
} // Slut!
const buttonAction4 = functionContainer() */

/* function buttonAction4() {
  let date;
  date = new Date()
  document.getElementsByName("button4")[0].onclick = function4;
  alert('Tidtagning startad.')
  function function4() {
    const newTime = new Date()
    const difference = (newTime.getTime() - date.getTime()) / 1000
    alert(`
    Sekunder sedan senaste klick:
    ${Math.floor(difference)}
    `)
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  }
} // Slut! */

// Uppgift 1a5 här:
function buttonAction5() {
  //Kode här!
  const num1 = document.getElementById('number1')
  const num2 = document.getElementById('number2')

  const result5 = document.getElementById('result5')

  const num1Val = num1.value
  const num2Val = num2.value

  if (
    num1Val &&
    num1Val >= 0 &&
    num1Val < 1000 &&
    num2Val &&
    num2Val >= 0 &&
    num2Val < 1000 &&
    !isNaN(num1Val) 
    ) {
      result5.textContent = num1Val * num2Val
  } else {
    result5.textContent = "🍌"
  }
} // Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  //Kode här!
  const textInput = document.getElementById('textInput')
  const wordCount = document.getElementById('wordCount')
  const words = textInput.value.split(' ').filter(Boolean)
  wordCount.textContent = words.length
} // Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  //Kode här!
  let message = prompt('Skriv meddelande här:')
  if (message) {
    message += " "
    message = message.repeat(10).trim()
    alert(message)
  }
} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  //Kode här!
  const hiddenButton = document.getElementById('hiddenButton')
  const visibility = window.getComputedStyle(hiddenButton).visibility
  if (visibility === "hidden") {
    hiddenButton.style.visibility = "visible"
  } else {
    hiddenButton.style.visibility = "hidden"
  }
} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  //Kode här
  const arrayInput = document.getElementById('arrayInput')
  const tableContainer = document.getElementById('tableContainer')
  const items = arrayInput.value.split(',').filter(Boolean)
  if (items.length <= 0) {
    tableContainer.textContent = "Empty."
  } else {
    let htmlString = "<table><tr>"
    items.forEach((item, index) => {
      if (index > 0 && index%7 === 0) {
        htmlString += "</tr><tr>"
      }
      htmlString += `<td>${item}</td>`
  })
  htmlString += "</tr></table>"
  tableContainer.innerHTML = htmlString;
  }

} //Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;