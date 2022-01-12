function test(color, element) {
  if (Array.isArray(element)) {
    element.pop().style.backgroundColor = color
    if (element.length > 1) {
      return test(color, element)
    }
  } else {
    element = Array.from(element.getElementsByTagName("*"))
    return test(color, element)
  }
}