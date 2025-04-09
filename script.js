// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial Carousel (Auto Slide & Manual Navigation)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('#testimonials p');
const prevButton = document.querySelector('#prevTestimonial');
const nextButton = document.querySelector('#nextTestimonial');

// Function to update testimonials
function updateTestimonial() {
    // Hide all testimonials
    testimonials.forEach(testimonial => testimonial.style.display = 'none');

    // Show the current testimonial
    testimonials[testimonialIndex].style.display = 'block';
}

// Event listeners for next and previous buttons
nextButton.addEventListener('click', () => {
    if (testimonialIndex < testimonials.length - 1) {
        testimonialIndex++;
    } else {
        testimonialIndex = 0; // Loop back to the first testimonial
    }
    updateTestimonial();
});

prevButton.addEventListener('click', () => {
    if (testimonialIndex > 0) {
        testimonialIndex--;
    } else {
        testimonialIndex = testimonials.length - 1; // Loop to the last testimonial
    }
    updateTestimonial();
});

// Automatically change testimonials every 5 seconds
setInterval(() => {
    if (testimonialIndex < testimonials.length - 1) {
        testimonialIndex++;
    } else {
        testimonialIndex = 0;
    }
    updateTestimonial();
}, 5000);

// Scroll to Top Button Functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Smooth scroll to the top
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const navMenu = document.getElementById('nav-menu');

mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form Validation for Contact Form
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const name = contactForm.querySelector('input[type="text"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');

    // Check if all fields are filled out
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill in all the fields.');
    } else {
        // Example of form submission (You can replace this with actual backend integration)
        alert('Your message has been sent!');
        contactForm.reset(); // Reset form after submission
    }
});

// Scroll Animations for elements when they come into view
const scrollElements = document.querySelectorAll('.scroll-element');

// Function to check if an element is in view
function checkIfInView() {
    scrollElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('in-view');
        } else {
            element.classList.remove('in-view');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', checkIfInView);

// Trigger the initial check when the page loads
checkIfInView();
