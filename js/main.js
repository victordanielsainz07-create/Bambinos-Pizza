/* ═══════════════════════════════════════════
   Bambinos Pizza — Main JS
   ═══════════════════════════════════════════ */

'use strict';

// ─── NAVBAR: scroll shrink + active link ───
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// ─── HAMBURGER MENU (versión simple, sin overlay) ───
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

if (hamburger && navLinksEl) {
  // Abre/cierra el panel. Solo togglea clases, nada más.
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinksEl.classList.toggle('open');
  });

  // Al tocar cualquier link dentro del menú, simplemente cerramos el
  // panel. NO usamos preventDefault aquí: el navegador navega o hace
  // scroll de forma 100% nativa, como si el menú no existiera.
  const linksInMenu = navLinksEl.querySelectorAll('a');
  for (let i = 0; i < linksInMenu.length; i++) {
    linksInMenu[i].addEventListener('click', function () {
      hamburger.classList.remove('active');
      navLinksEl.classList.remove('open');
    });
  }
}

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal, .reveal-right').forEach(el => observer.observe(el));

// Auto-reveal elements in sections on scroll
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.food-card, .servicio-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease';
  cardObserver.observe(el);
});

// ─── PIZZA SIZE SELECTOR ───
const prices = {
  personal: '$110',
  chica:    '$180',
  mediana:  '$220',
  grande:   '$300',
  mega:     '$600',
};

document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    this.closest('.food-sizes').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const priceEl = document.getElementById('pizza-price');
    if (priceEl) {
      priceEl.textContent = prices[this.dataset.size] || '$110';
      priceEl.style.animation = 'none';
      priceEl.offsetHeight; // reflow
      priceEl.style.animation = 'fadeInUp 0.3s ease';
    }
  });
});

// ─── SMOOTH ANCHOR SCROLL (solo para anchors FUERA del menú móvil) ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  if (a.closest('#navLinks')) return; // los del menú navegan de forma nativa
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── MARQUEE: pause on hover ───
const marquee = document.querySelector('.marquee-track');
if (marquee) {
  marquee.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
  marquee.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
}

// ─── CONSOLE EASTER EGG ───
console.log('%c🍕 Bambinos Pizza', 'font-size:24px; font-weight:bold; color:#c82000;');
console.log('%cHecho con Amor y mucho queso.', 'font-size:14px; color:#c88200;');