let slides = document.querySelectorAll(".slides")
// console.log("slides is", slides);
let slideIndex = 0

let showSlides = (index) => {
    // console.log("index from show slides is", index);
    slides.forEach((slide, i) => {
        // console.log(i);
        if (i === index) {
            slide.style.display = "block"
        } else {
            slide.style.display = "none"
        }
        // or
        // slide.style.display=i===index?"block":"none"
        // console.log(slide);
    })
}
showSlides()

let nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length
    showSlides(slideIndex)
}
let slideInterval = setInterval(nextSlide, 2000)
showSlides(slideIndex)