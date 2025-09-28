/*=============== INITIALIZE AOS (ANIMATE ON SCROLL) ===============*/
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once
});


/*=============== HEADER SCROLL EFFECT ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', scrollHeader);


/*=============== SHOW & HIDE MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        document.body.classList.add('show-nav'); // Prevents scrolling when menu is open
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.classList.remove('show-nav');
    });
}

// Hide menu when a link is clicked on mobile
const navLinks = document.querySelectorAll('.nav__link');
function linkAction() {
    navMenu.classList.remove('show-menu');
    document.body.classList.remove('show-nav');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));


/*=============== TYPED.JS (TYPING EFFECT) ===============*/
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('typed-text')) {
        const typed = new Typed('#typed-text', {
            strings: ['Real Estate and Finance Enthusiast'],
            typeSpeed: 75,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
        });
    }
});


/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjusted for better accuracy
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav__list a[href*=${sectionId}]`);

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);


/*=============== SMOOTH SCROLLING FOR NAV LINKS ===============*/
const allLinks = document.querySelectorAll('.nav__link, .home__scroll, .nav__logo');

allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


/*=============== SHOW SCROLL UP BUTTON ===============*/
function scrollUp() {
    const scrollUpButton = document.getElementById('scroll-up');
    if (this.scrollY >= 400) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

