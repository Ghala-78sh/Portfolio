// Fade in animation for sections
const faders = document.querySelectorAll('section');

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.classList.add('visible');
    observer.unobserve(entry);
  });
}, appearOptions);

faders.forEach(section => {
  section.classList.add('fade-in');
  appearOnScroll.observe(section);
});