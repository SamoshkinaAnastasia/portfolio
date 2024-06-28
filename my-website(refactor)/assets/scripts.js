// Автоматическое перелистывание слайдера
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;

setInterval(() => {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${slideWidth}px)`;

    setTimeout(() => {
        slides.appendChild(slides.firstElementChild);
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
    }, 5000); // 5000 миллисекунд = 5 секунд
}, 7000); // 7000 миллисекунд = 7 секунд
