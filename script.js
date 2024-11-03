const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Initialize ARIA attribute
navLinks.setAttribute('aria-expanded', 'false');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle aria-expanded attribute
    const isActive = navLinks.classList.contains('active');
    navLinks.setAttribute('aria-expanded', isActive);
});

// Close the menu when a navigation link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navLinks.setAttribute('aria-expanded', 'false');
    });
});
// Initialize AOS animations
AOS.init({
    duration: 500, // Duration of animation
    offset: 300,   // Offset for the animation trigger
    easing: 'ease-in-out',
});

// Typed.js for typing effect
const typed = new Typed('.auto-type', {
    strings: ['Nitish Kumar Cholleti', 'Web Developer', 'Competitive Programmer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

