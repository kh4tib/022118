const button = document.querySelector('.main-button-oval');
const container = document.querySelector('.main-button-base');
const bg = document.querySelector('.main-button-oval-bg');

container.addEventListener('click', () => {
    button.classList.toggle('js-button-oval-on');
    bg.classList.toggle('js-button-oval-bg-on');
});