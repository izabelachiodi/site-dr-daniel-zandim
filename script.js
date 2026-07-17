const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const menuLabel = toggle?.querySelector('.sr-only');

function setMenu(open) {
  toggle?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (menuLabel) menuLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
}

toggle?.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('click', (event) => {
  if (!document.body.classList.contains('menu-open')) return;
  if (nav?.contains(event.target) || toggle?.contains(event.target)) return;
  setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

document.getElementById('year').textContent = new Date().getFullYear();

const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('visible'));
}
