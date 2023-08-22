import { playAndPause, editAndReset, speaker } from "./controls.js"
import * as utils from "../../utils.js"
import { state } from "./state.js"

export function togglePlayAndPause() {
  utils.updateElementWithToggledClasses(playAndPause)
  utils.updateElementAccessibility(playAndPause)

  state.isRunning = !state.isRunning

  const isEditButton = editAndReset.element.classList.contains("edit")

  if (isEditButton) {
    utils.updateElementWithToggledClasses(editAndReset)
    utils.updateElementAccessibility(editAndReset)
  }
}

export function toggleEditAndReset() {
  const isResetButton = editAndReset.element.classList.contains("reset")

  if (state.isRunning) {
    utils.updateElementWithToggledClasses(editAndReset)
    utils.updateElementAccessibility(editAndReset)

    utils.updateElementWithToggledClasses(playAndPause)
    utils.updateElementAccessibility(playAndPause)

    state.isRunning = !state.isRunning
  } else if (isResetButton) {
    utils.updateElementWithToggledClasses(editAndReset)
    utils.updateElementAccessibility(editAndReset)
  }
}

export function toggleSpeaker() {
  utils.updateElementWithToggledClasses(speaker)
  utils.updateElementAccessibility(speaker)

  state.isMute = !state.isMute
}
