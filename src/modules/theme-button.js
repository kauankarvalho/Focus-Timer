import { buttonPressAudio } from "./FocusTimer/sounds.js"

export const themeButton = {
  element: document.querySelector(".js-theme-button"),
  themeToggle: () => {
    const html = document.documentElement
    buttonPressAudio.play()
    html.classList.toggle("dark")
  },
}
