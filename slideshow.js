let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) {
        alert("No slides found!");
        return; // If there are no slides, exit the function
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
