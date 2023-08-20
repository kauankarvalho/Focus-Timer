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

export const timer = {
  element: document.querySelector("#timer"),
  span: document.querySelector("#timer span"),
  button_1: {
    name: "timer",
    accessibility: "Ajustar o contador.",
  },
  button_2: {
    name: "stop",
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
