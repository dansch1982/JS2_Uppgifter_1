/* Skriv en rekursiv funktion som ändrar bakgrundsfärgen på alla
element som finns inuti ett visst element. Funktionen behöver två
parametrar: färgen och ett DOM-element, som du hämtar med
getElementById. */

function eighteen(color, element) {
  if (Array.isArray(element)) {
    element.pop().style.backgroundColor = color
    if (element.length > 0) {
      eighteen(color, element)
    }
  } else {
    element = Array.from(element.getElementsByTagName("*"))
    eighteen(color, element)
  }
}