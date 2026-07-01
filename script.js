// =========================================================
// the Venkatesh — Portfolio interactions
// =========================================================

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Terminal typing effect in hero
const typedEl = document.getElementById('typedLine');
const lines = [
  'initializing profile...',
  'access granted: venkatesh kumar',
  'role: security engineer / SOC & EDR specialist'
];
let lineIndex = 0, charIndex = 0;

function typeLoop(){
  if (!typedEl) return;
  const current = lines[lineIndex];
  if (charIndex <= current.length){
    typedEl.textContent = current.slice(0, charIndex);
    charIndex++;
    setTimeout(typeLoop, 45);
  } else {
    setTimeout(() => {
      charIndex = 0;
      lineIndex = (lineIndex + 1) % lines.length;
      typeLoop();
    }, 1600);
  }
}
typeLoop();

// Graceful fallback if banner/portrait images are missing
function handleImageFallback(imgId, fallbackId){
  const img = document.getElementById(imgId);
  const fallback = document.getElementById(fallbackId);
  if (!img || !fallback) return;
  img.addEventListener('error', () => {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  });
}
handleImageFallback('heroImg', 'heroFallback');
handleImageFallback('portraitImg', 'portraitFallback');
