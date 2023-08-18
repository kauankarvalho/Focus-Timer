import { togglePlayAndPause, toggleTimer, toggleSpeaker } from "./actions.js"
import { buttonPressAudio, bgMusicAudio } from "./sounds.js"
import { playAndPause, timer, speaker } from "./controls.js"
import * as countdown from "./timer.js"
import { state } from "./state.js"

export function eventsListeners() {
  playAndPause[0].addEventListener("click", () => {
    if (!countdown.isEditing) {
      buttonPressAudio.play()
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
      buttonPressAudio.play()
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
      buttonPressAudio.play()
      toggleSpeaker()

      if (!state.isMute) {
        bgMusicAudio.play()
      } else {
        bgMusicAudio.pause()
      }
    }
  })
}
