const themeButton = document.querySelector(".js-theme-button")

themeButton.addEventListener("click", () => {
  const html = document.documentElement
  html.classList.toggle("dark")
})
