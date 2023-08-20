import { playAndPause, timer, speaker } from "./controls.js"
import * as utils from "../utils.js"
import { state } from "./state.js"

export function togglePlayAndPause() {
  utils.updateElementWithToggledClasses(playAndPause)
  utils.updateElementAccessibility(playAndPause)

  state.isRunning = !state.isRunning

  const isTimerElement = timer.element.classList.contains("timer")

  if (isTimerElement) {
    utils.updateElementWithToggledClasses(timer)
    utils.updateElementAccessibility(timer)
  }
}

export function toggleTimer() {
  const isStopElement = timer.element.classList.contains("stop")

  if (state.isRunning) {
    utils.updateElementWithToggledClasses(timer)
    utils.updateElementAccessibility(timer)

    utils.updateElementWithToggledClasses(playAndPause)
    utils.updateElementAccessibility(playAndPause)

    state.isRunning = !state.isRunning
  } else if (isStopElement) {
    utils.updateElementWithToggledClasses(timer)
    utils.updateElementAccessibility(timer)
  }
}

export function toggleSpeaker() {
  utils.updateElementWithToggledClasses(speaker)
  utils.updateElementAccessibility(speaker)

  state.isMute = !state.isMute
}
