const menuIcon = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the active class
});