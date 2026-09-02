// Scroll-reveal entrance animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || '0', 10);
      entry.target.style.transitionDelay = delay * 0.1 + 's';
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Active nav link highlighting on scroll
const navLinks = document.querySelectorAll('.nav-link');
const spySections = document.querySelectorAll('main section[id]');
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) =>
        link.classList.toggle('active', link.getAttribute('href') === '#' + id)
      );
    }
  });
}, { threshold: 0.5 });
spySections.forEach((sec) => spyObserver.observe(sec));

// Email icons → fade-in success message
const successMsg = document.getElementById('successMsg');
document.querySelectorAll('.email-icon').forEach((icon) => {
  icon.addEventListener('click', () => successMsg.classList.add('show'));
});

// Subtle header shadow on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(24,19,14,.06)' : 'none';
});