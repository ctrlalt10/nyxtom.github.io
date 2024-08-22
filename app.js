// app.js

// Smooth scroll for "Learn More" button
document.querySelector('.cta-button').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
