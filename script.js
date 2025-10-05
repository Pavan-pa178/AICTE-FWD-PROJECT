// Smooth scroll navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    if (window.innerWidth <= 900) {
      document.querySelector('.nav-links')?.classList.remove('active');
    }
  });
});

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Animation setup
const animateSections = document.querySelectorAll('.animate-section');
const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  return bounding.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9;
};
const runAnimation = () => {
  animateSections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('load', runAnimation);
window.addEventListener('scroll', runAnimation);

// Contact form validation + redirect
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }

    formMessage.textContent = '✅ Message sent successfully! Redirecting...';
    formMessage.style.color = 'green';

   
    setTimeout(() => {
      window.location.href = 'success.html';
    }, 1500);

    form.reset();
  });
}

