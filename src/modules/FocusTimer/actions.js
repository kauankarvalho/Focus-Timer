import { playAndPause, timer, speaker } from "./controls.js"
import { toggleClassesOnElement } from "../utils.js"
import { state } from "./state.js"

export function togglePlayAndPause() {
  toggleClassesOnElement(playAndPause)
  state.isRunning = !state.isRunning

  const isTimerElement = timer[0].classList.contains("timer")

  if (isTimerElement) {
    toggleClassesOnElement(timer)
  }
}

export function toggleTimer() {
  const isStopElement = timer[0].classList.contains("stop")

  if (state.isRunning) {
    toggleClassesOnElement(timer)
    toggleClassesOnElement(playAndPause)

    state.isRunning = !state.isRunning
  } else if (isStopElement) {
    toggleClassesOnElement(timer)
  }
}

export function toggleSpeaker() {
  toggleClassesOnElement(speaker)
  state.isMute = !state.isMute
}
