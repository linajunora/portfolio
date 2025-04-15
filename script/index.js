window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

//background stuff
const maskLayer = document.querySelector('.intense-mask-layer');
const maskRadius = 430; 

document.addEventListener('mousemove', (e) => {
  const x = e.clientX - maskRadius;
  const y = e.clientY - maskRadius;
  maskLayer.style.maskPosition = `${x}px ${y}px`;
  maskLayer.style.webkitMaskPosition = `${x}px ${y}px`; 
});
//

