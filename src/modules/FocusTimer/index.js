import { updateTimerState, updateDisplay } from "./timer.js"
import { eventsListeners } from "./events.js"

export function FocusTimer(minutes, seconds) {
  updateTimerState(minutes, seconds)
  updateDisplay()
  eventsListeners()
}
