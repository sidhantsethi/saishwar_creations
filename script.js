const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

if (slides.length > 1) {
  setInterval(nextSlide, 4500);
}
function toggleMenu() {
  const nav = document.getElementById("site-nav");
  nav.classList.toggle("active");
}