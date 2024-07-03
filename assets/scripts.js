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


const bellIcon = document.getElementById('bellIcon');
const helpPopup = document.getElementById('helpPopup');

bellIcon.addEventListener('click', () => {
    helpPopup.style.display = 'block';
});


function confirmHelp(answer) {
    if (answer) {
        alert('Спасибо за ваш ответ!');
    } else {
        alert('Не стесняйтесь обращаться, если вам понадобится помощь!');
    }
    helpPopup.style.display = 'none'; 
}