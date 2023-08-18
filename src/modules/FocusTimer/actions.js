import { playAndPause, timer, speaker } from "./controls.js"
import { state } from "./state.js"

function toggleClassesOnElement(array) {
  for (let i = 1; i < array.length; i++) {
    array[0].classList.toggle(array[i])
  }
}

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
