document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    if (currentIndex === 0) {
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0)';
        }, 500);
    }
}, 7000);
});
