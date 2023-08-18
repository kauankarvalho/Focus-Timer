import { playAndPause, timer, speaker } from "./controls.js"
import { togglePlayAndPause, toggleTimer, toggleSpeaker } from "./actions.js"
import * as countdown from "./timer.js"
import { state } from "./state.js"

export function eventsListeners() {
  playAndPause[0].addEventListener("click", () => {
    if (!countdown.isEditing) {
      togglePlayAndPause()

      if (state.isRunning) {
        countdown.startCountdown()
      } else {
        countdown.stopCountdown()
      }
    }
  })

  timer[0].addEventListener("click", () => {
    if (!countdown.isEditing) {
      const isStopElement = timer[0].classList.contains("stop")

      if (isStopElement) {
        countdown.resetCountdown()
        toggleTimer()
      } else {
        countdown.editCountdown()
      }
    }
  })

  speaker[0].addEventListener("click", () => {
    if (!countdown.isEditing) {
      toggleSpeaker()
    }
  })
}
