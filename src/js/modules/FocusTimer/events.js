import { playAndPause, editAndReset, speaker } from "./controls.js"
import { buttonPressAudio, bgMusicAudio } from "./sounds.js"
import { toggleDisabledAttribute } from "../../utils.js"
import * as countdown from "./timer.js"
import * as action from "./actions.js"
import { state } from "./state.js"

export function initEventListeners() {
  playAndPause.element.addEventListener("click", () => {
    buttonPressAudio.play()
    action.togglePlayAndPause()

    if (state.isRunning) {
      countdown.startCountdown()
    } else {
      countdown.stopCountdown()
    }
  })

  editAndReset.element.addEventListener("click", () => {
    buttonPressAudio.play()
    const isResetButton = editAndReset.element.classList.contains("reset")

    if (isResetButton) {
      if (state.minutes === 0 && state.seconds === 0) {
        toggleDisabledAttribute(playAndPause.element)
      }

      countdown.resetCountdown()
      action.toggleEditAndReset()
    } else {
      countdown.editCountdown()
    }
  })

  speaker.element.addEventListener("click", () => {
    buttonPressAudio.play()
    action.toggleSpeaker()

    if (!state.isMute) {
      bgMusicAudio.play()
    } else {
      bgMusicAudio.pause()
    }
  })
}
