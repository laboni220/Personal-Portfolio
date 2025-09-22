/*=============== INITIALIZE AOS (ANIMATE ON SCROLL) ===============*/
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once
});


/*=============== HEADER SCROLL EFFECT ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the 'scrolled' class
    if (this.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', scrollHeader);


/*=============== TYPED.JS (TYPING EFFECT) ===============*/
const typed = new Typed('#typed-text', {
    strings: ['Real Estate Enthusiast', 'Finance Enthusiast', 'Skilled Organizer'],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
});


/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (navLink) { // Check if the link exists
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);


/*=============== SMOOTH SCROLLING FOR NAV LINKS ===============*/
const navLinks = document.querySelectorAll('.nav__link, .home__scroll, .button--ghost');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
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


/*=============== EMAILJS CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // IMPORTANT: Replace with your actual EmailJS IDs
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, '#contact-form', publicKey)
        .then(() => {
            contactMessage.textContent = 'Message sent successfully! ✅';
            contactMessage.style.color = 'var(--success-color)';
            setTimeout(() => {
                contactMessage.textContent = '';
                contactForm.reset();
            }, 5000);
        }, (error) => {
            contactMessage.textContent = 'Message not sent (service error) ❌';
            contactMessage.style.color = 'var(--error-color)';
            console.error('EmailJS Error:', error);
        });
};


contactForm.addEventListener('submit', sendEmail);
