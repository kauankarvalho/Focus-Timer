export function toggleClassesOnElement(array) {
  for (let i = 1; i < array.length; i++) {
    array[0].classList.toggle(array[i])
  }
}

export function isTwoDigitNumber(element) {
  const teste = element.split("")
  return teste.length === 2
}
