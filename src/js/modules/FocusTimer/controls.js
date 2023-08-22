export const playAndPause = {
  element: document.querySelector("#play-pause"),
  span: document.querySelector("#play-pause span"),
  button_1: {
    name: "play",
    accessibility: "Iniciar o contador.",
  },
  button_2: {
    name: "pause",
    accessibility: "Pausar o contador.",
  },
}

export const editAndReset = {
  element: document.querySelector("#edit-reset"),
  span: document.querySelector("#edit-reset span"),
  button_1: {
    name: "edit",
    accessibility: "Ajustar o contador.",
  },
  button_2: {
    name: "reset",
    accessibility: "Reiniciar o  contador.",
  },
}

export const speaker = {
  element: document.querySelector("#speaker"),
  span: document.querySelector("#speaker span"),
  button_1: {
    name: "speaker-none",
    accessibility: "Iniciar música.",
  },
  button_2: {
    name: "speaker-high",
    accessibility: "Pausar música.",
  },
}
