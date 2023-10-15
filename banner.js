const slides = document.querySelectorAll(".banner-slide")
const dots = document.querySelectorAll(".dot")

let counter = 1
let timer = setInterval(autoSlide, 8000)
moveToSlide(counter)
function autoSlide() {
    counter++
    moveToSlide(counter)
}

function plusSlide(n) {
    counter += n
    moveToSlide(counter)
    resetTimer()
}

function currentSlide(n) {
    counter = n
    moveToSlide(counter)
    resetTimer()
}

function moveToSlide(n) {
    let i
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
        dots[i].classList.remove("active")
    }
    if (n > slides.length) counter = 1
    if (n < 1) counter = slides.length

    slides[counter - 1].style.display = "block"
    dots[counter - 1].classList.add("active")
}

function resetTimer() {
    clearInterval(timer)
    timer = setInterval(autoSlide, 8000)
}
