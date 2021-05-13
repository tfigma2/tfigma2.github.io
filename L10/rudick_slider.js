let slides = document.querySelectorAll('#sl .slide');
let currentSlide = 0;
prewBtn = document.getElementById('prev');
nextBtn = document.getElementById('next');
goToSlide(currentSlide);
function nextSlide() {
    goToSlide(currentSlide + 1);
}
function previousSlide() {
    goToSlide(currentSlide - 1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
nextBtn.onclick = function () {
    nextSlide();
};
prewBtn.onclick = function () {
    previousSlide();
};