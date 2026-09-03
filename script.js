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

// Active nav link based on current page
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// Email icons → fade-in success message
const successMsg = document.getElementById('successMsg');
if (successMsg) {
  document.querySelectorAll('.email-icon').forEach((icon) => {
    icon.addEventListener('click', () => successMsg.classList.add('show'));
  });
}

// Subtle header shadow on scroll
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(24,19,14,.06)' : 'none';
  });
}