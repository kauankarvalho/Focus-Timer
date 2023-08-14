import { themeButton } from "./modules/theme-button.js"
import { FocusTimer } from "./modules/FocusTimer/index.js"

themeButton.element.addEventListener("click", () => themeButton.themeToggle())

FocusTimer()
