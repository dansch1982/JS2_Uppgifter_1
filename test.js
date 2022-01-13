function whyRecursive(color, element) {
  if (Array.isArray(element)) {
    element.pop().style.backgroundColor = color
    if (element.length > 0) {
      whyRecursive(color, element)
    }
  } else {
    element = Array.from(element.getElementsByTagName("*"))
    whyRecursive(color, element)
  }
}