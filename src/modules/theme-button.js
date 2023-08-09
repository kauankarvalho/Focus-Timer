export const themeButton = {
  element: document.querySelector(".js-theme-button"),
  themeToggle: () => {
    const html = document.documentElement
    html.classList.toggle("dark")
  },
}
