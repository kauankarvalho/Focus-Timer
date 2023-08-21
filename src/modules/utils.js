export function updateElementWithToggledClasses(object) {
  const { element, button_1, button_2 } = object

  element.classList.toggle(button_1.name)
  element.classList.toggle(button_2.name)
}

export function updateElementAccessibility(object) {
  const { element, span, button_1, button_2 } = object

  if (element.classList.contains(button_1.name)) {
    span.innerText = button_1.accessibility
  } else {
    span.innerText = button_2.accessibility
  }
}

export function hasTwoItems(element) {
  return element.length == 2
}

export function hasTwoDigits(element) {
  return /\d\d/.test(element)
}
