let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let currentLink = document.querySelector('header nav a[href*=' + id + ']');
            if(currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
    /* Sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        navbar.classList.remove('active');
    });
});
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .Contact form',{ origin: 'button' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop:true,
})
// تفعيل خدمة EmailJS
emailjs.init("4PHGAKsJpFtIanlw3");

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // تجميع البيانات يدويًا من الحقول لتجنب مشاكل القراءة
        const templateParams = {
            user_name: this.querySelector('[name="user_name"]').value,
            user_email: this.querySelector('[name="user_email"]').value,
            user_number: this.querySelector('[name="user_number"]').value,
            email_subject: this.querySelector('[name="email_subject"]').value,
            message: this.querySelector('[name="message"]').value
        };

        emailjs.send('service_7mtonns', 'template_2770w3j', templateParams)
            .then(function(response) {
                Swal.fire({
                   icon: 'success',
                   title: 'Sent!',
                   text: 'Your message has been sent successfully, I will contact you soon 🚀',
                   confirmButtonColor: '#00eeff' // لون يتناسب مع موقعك
                });
                contactForm.reset();
            }, function(error) {
                Swal.fire({
                 icon: 'error',
                 title: 'Sorry...',
                 text: 'An error occurred during transmission, please try again! ❌'
                });
                console.log('FAILED...', error);
            });
    });
}