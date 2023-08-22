import { updateTimerState, updateDisplay } from "./timer.js"
import { initEventListeners } from "./events.js"

export function focusTimer(minutes, seconds) {
  updateTimerState(minutes, seconds)
  updateDisplay()
  initEventListeners()
}
