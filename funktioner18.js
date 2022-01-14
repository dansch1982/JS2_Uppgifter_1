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