// Countdown Timer Script
const countdown = document.getElementById('countdown');
const eventDate = new Date('December 21, 2024 14:00:00').getTime();

function updateCountdown() {
const now = new Date().getTime();
const distance = eventDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

if (distance < 0) {
countdown.innerHTML = "The event has started!";
}

// GSAP Animation for the Header
gsap.from("header", { duration: 1.5, y: -100, opacity: 0, ease: "bounce" });

// GSAP Animation for Activities
gsap.from(".activity-list li", {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.2, // Animate each item sequentially
    ease: "power2.out"
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in effect on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
}

setInterval(updateCountdown, 1000);