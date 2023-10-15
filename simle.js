const next = document.querySelector("#next")
const slider = document.querySelector(".slider")
let sliderPosition = 0

next.addEventListener("click", scrollRight)

function scrollRight() {
    slider.scrollTo((sliderPosition += 1000), 0)
    console.log("Scrolled scrollRight")
}

slider.addEventListener("scroll", (e) => console.log(e.scrollX))
