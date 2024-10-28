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

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`; // Use translateX for horizontal sliding
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Show the first slide
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

}