import { playAndPause, timer, speaker } from "./controls.js"
import { state } from "./state.js"

let x = true

function toggleClassesOnElement(array) {
  for (let i = 1; i < array.length; i++) {
    array[0].classList.toggle(array[i])
  }
}

function togglePlayAndPause() {
  toggleClassesOnElement(playAndPause)
  state.isRunning = !state.isRunning

  if (state.isRunning && x) {
    toggleClassesOnElement(timer)
    x = false
  }
}

function toggleTimer() {
  if (state.isRunning) {
    toggleClassesOnElement(timer)
    toggleClassesOnElement(playAndPause)

    state.isRunning = !state.isRunning
    x = !x
  } else if (!state.isRunning && !x) {
    toggleClassesOnElement(timer)
    x = true
  }
}

function toggleSpeaker() {
  toggleClassesOnElement(speaker)
  state.isMute = !state.isMute
}

export function actions() {
  playAndPause[0].addEventListener("click", togglePlayAndPause)
  timer[0].addEventListener("click", toggleTimer)
  speaker[0].addEventListener("click", toggleSpeaker)
}
