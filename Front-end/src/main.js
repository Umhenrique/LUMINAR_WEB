// LUMINAR Main Script

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initMobileMenu();
});

/**
 * Initializes IntersectionObserver to trigger animations when elements enter viewport
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: Stop observing once animated
        // observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/**
 * Initializes mobile menu functionality
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!menuBtn || !navLinks) return;

  // Basic toggle logic (styles need to be adjusted in CSS if expanding this)
  menuBtn.addEventListener('click', () => {
    // Toggles a class that can be styled to show/hide the menu on small screens
    navLinks.classList.toggle('nav-active');

    // Animate hamburger icon
    const spans = menuBtn.querySelectorAll('span');
    navLinks.classList.contains('nav-active') ?
      spans.forEach(s => s.style.background = 'var(--neon-green)') :
      spans.forEach(s => s.style.background = 'var(--text-primary)');
  });
}
