//hamburger
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    const logo = document.querySelector('.logo');
    const burgerWrap = document.querySelector('.hamburger-wrap');

    hamburger.classList.toggle('active');
    burgerWrap.classList.toggle('active');
    logo.classList.toggle('active');

    // close hamburger when reached a new section of page
    const navBtns = document.querySelectorAll('.burger-link');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {

                hamburger.classList.remove('active');
                burgerWrap.classList.remove('active');
                logo.classList.remove('active');
            }
        });
    });
});

//navbar background when scroll
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= 25) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    }
});