import { FocusTimer } from "./modules/FocusTimer/index.js"
import { themeButton } from "./modules/theme-button.js"

themeButton.element.addEventListener("click", () => themeButton.themeToggle())

FocusTimer()
