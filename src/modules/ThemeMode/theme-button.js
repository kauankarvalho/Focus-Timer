import { buttonPressAudio } from "../FocusTimer/sounds.js"

export const themeButton = {
  element: document.querySelector(".js-theme-button"),
  span: document.querySelector(".js-theme-button span"),
  accessibility: {
    darkMode: "Ativar tema escuro.",
    lightMode: "Ativar tema claro.",
  },
  themeToggle: () => {
    const html = document.documentElement

    buttonPressAudio.play()
    html.classList.toggle("dark")

    if (html.classList.contains("dark")) {
      themeButton.span.innerText = themeButton.accessibility.lightMode
    } else {
      themeButton.span.innerText = themeButton.accessibility.darkMode
    }
  },
}
