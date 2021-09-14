const btnOpen = document.querySelector('button#open');
const btnClose = document.querySelector('button#close');
const container = document.querySelector('.container');
const circleNavbar = document.querySelector('.circle-navbar');
const navbar = document.querySelector('.navbar-menu');

btnOpen.addEventListener('click', () => {
    [container, circleNavbar, navbar].forEach(target => {
        target.classList.add('show-navbar');
    })
});

btnClose.addEventListener('click', () => {
    [container, circleNavbar, navbar].forEach(target => {
        target.classList.remove('show-navbar');
    })
})