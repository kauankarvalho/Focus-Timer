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

export function isTwoDigitNumber(element) {
  const teste = element.split("")
  return teste.length === 2
}
