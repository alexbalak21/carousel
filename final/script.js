const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const slider = document.querySelector(".slider")

let sliderPosition = 0
const delay = 8000
let movingRight = true
let number_of_slides = slider.querySelectorAll(".slide-container").length
let width = window.innerWidth
let timer = setInterval(autoslider, delay)
window.addEventListener("resize", () => (width = window.innerWidth))

if (sliderPosition === 0) prev.style.display = "none"
if (sliderPosition >= width * (number_of_slides - 1))
    next.style.display = "none"

next.addEventListener("click", scrollRight)
prev.addEventListener("click", scrollLeft)

function autoslider() {
    if (next.style.display === "none") movingRight = false
    if (prev.style.display === "none") movingRight = true
    if (movingRight) scrollRight()
    else scrollLeft()
}

function scrollRight() {
    slider.scrollTo((sliderPosition += width), 0)
    clearInterval(timer)
    timer = setInterval(autoslider, delay)
    prev.addEventListener("click", scrollLeft)
    prev.style.display = "block"

    if (sliderPosition >= width * (number_of_slides - 1)) {
        next.removeEventListener("click", scrollRight)
        next.style.display = "none"
    }
}

function scrollLeft() {
    if (sliderPosition > 0) slider.scrollTo((sliderPosition -= width), 0)
    clearInterval(timer)
    timer = setInterval(autoslider, delay)
    next.addEventListener("click", scrollRight)
    next.style.display = "block"
    if (sliderPosition <= 0) {
        prev.removeEventListener("click", scrollLeft)
        prev.style.display = "none"
    }
}
