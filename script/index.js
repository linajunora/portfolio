window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

//background stuff
const maskLayer = document.querySelector('.intense-mask-layer');
const maskRadius = 350; 

document.addEventListener('mousemove', (e) => {
  const x = e.clientX - maskRadius;
  const y = e.clientY - maskRadius;
  maskLayer.style.maskPosition = `${x}px ${y}px`;
  maskLayer.style.webkitMaskPosition = `${x}px ${y}px`; 
});
//

//view work btn 
const viewWorkBtn = document.getElementById('viewWorkBtn');

viewWorkBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const body = document.querySelector('.indexBody');
  body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = '/about.html';
  }, 600);
});