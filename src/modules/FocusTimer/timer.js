import { hasTwoItems, hasTwoDigits } from "../utils.js"
import { togglePlayAndPause } from "./actions.js"
import { kitchenTimerAudio } from "./sounds.js"
import { timerNumber } from "./timer-number.js"
import { state } from "./state.js"

export function updateTimerState(minutes, seconds) {
  minutes = minutes ?? state.defaultMinutes
  seconds = seconds ?? state.defaultSeconds

  minutes = minutes > 60 ? (minutes = 60) : minutes
  if (minutes == 60) {
    seconds = 0
  } else if (minutes === 0) {
    seconds = 30
  } else if (seconds === 0) {
    seconds = 0
  } else {
    seconds = seconds !== 30 ? (seconds = 30) : seconds
  }

  state.defaultMinutes = minutes
  state.defaultSeconds = seconds

  state.minutes = state.defaultMinutes
  state.seconds = state.defaultSeconds
}

export function updateDisplay() {
  timerNumber.minutes.innerText = String(state.minutes).padStart(2, "0")
  timerNumber.seconds.innerText = String(state.seconds).padStart(2, "0")
}

function countdown() {
  if (state.seconds > 0) {
    state.seconds--
  } else if (state.minutes > 0) {
    state.minutes--
    state.seconds = 59
  }

  if (state.minutes === 0 && state.seconds === 0) {
    kitchenTimerAudio.play()
    togglePlayAndPause()
    clearInterval(countdownInterval)
  }

  updateDisplay()
}

let countdownInterval

export function startCountdown() {
  countdownInterval = setInterval(countdown, 1000)
}

export function stopCountdown() {
  clearInterval(countdownInterval)
}

export function resetCountdown() {
  stopCountdown()

  state.minutes = state.defaultMinutes
  state.seconds = state.defaultSeconds

  updateDisplay()
}

export let isEditing = false

export function editCountdown() {
  isEditing = true

  let isEditingMinutes = false
  let isEditingSeconds = false

  timerNumber.minutes.setAttribute("contenteditable", true)
  timerNumber.seconds.setAttribute("contenteditable", true)

  timerNumber.minutes.innerText = ""
  timerNumber.seconds.innerText = ""

  let editingInterval

  editingInterval = setInterval(checkEditing, 500)

  function checkEditing() {
    const minutesElement = timerNumber.minutes
    const secondsElement = timerNumber.seconds

    if (!isEditingMinutes) {
      minutesElement.focus()

      if (hasTwoItems(minutesElement.innerText)) {
        if (hasTwoDigits(minutesElement.innerText)) {
          minutesElement.setAttribute("contenteditable", false)

          if (Number(minutesElement.innerText) > 60) {
            minutesElement.innerText = "60"
          }
          state.defaultMinutes = Number(minutesElement.innerText)
          updateTimerState()

          minutesElement.blur()
          isEditingMinutes = true
        } else {
          minutesElement.innerText = ""
        }
      }
    } else if (!isEditingSeconds) {
      secondsElement.focus()

      if (hasTwoItems(secondsElement.innerText)) {
        if (hasTwoDigits(secondsElement.innerText)) {
          secondsElement.setAttribute("contenteditable", false)

          if (Number(minutesElement.innerText) === 60) {
            secondsElement.innerText = "00"
          } else if (Number(minutesElement.innerText) === 0) {
            secondsElement.innerText = "30"
          } else if (Number(secondsElement.innerText) === 0) {
            secondsElement.innerText = "00"
          } else if (Number(secondsElement.innerText) !== 30) {
            secondsElement.innerText = "30"
          }

          state.defaultSeconds = Number(secondsElement.innerText)
          updateTimerState()

          secondsElement.blur()
          isEditingSeconds = true
        } else {
          secondsElement.innerText = ""
        }
      }
    } else {
      isEditing = false
      clearInterval(editingInterval)
    }
  }
}
