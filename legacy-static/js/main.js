/* =====================================================
   SUNRISE CAFE — Main JS
   ===================================================== */

/* --- Mobile nav toggle --- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

/* Close mobile nav when a link is clicked */
mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

/* --- Active nav link --- */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.primary-nav a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* --- Highlight today in hours list --- */
function highlightToday() {
  const dayIndex = new Date().getDay(); // 0=Sun
  /* Map JS day index to our HTML day classes */
  const dayMap = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' };
  const todayClass = dayMap[dayIndex];
  document.querySelectorAll(`.hours-row[data-day="${todayClass}"]`).forEach(row => {
    row.classList.add('today');
  });
}
highlightToday();

/* --- Dynamic copyright year --- */
document.querySelectorAll('.copyright-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* --- Menu tabs --- */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(target)?.classList.add('active');
      /* Scroll tab into view on mobile */
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  /* Activate tab from URL hash */
  const hash = location.hash.slice(1);
  if (hash) {
    const matchTab = document.querySelector(`.menu-tab[data-tab="${hash}"]`);
    if (matchTab) matchTab.click();
  }
}
initMenuTabs();

/* --- Gallery lightbox --- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const img = items[index].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + items.length) % items.length;
    openLightbox(currentIndex);
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(i); });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
  });

  lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev')?.addEventListener('click', () => navigate(-1));
  lightbox.querySelector('.lightbox-next')?.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}
initLightbox();

/* --- Contact / catering form: honeypot + basic validation --- */
function initForms() {
  document.querySelectorAll('form.inquiry-form, form.contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      /* Honeypot check */
      const hp = form.querySelector('.hp-field input');
      if (hp && hp.value) { e.preventDefault(); return; }

      /* Basic required-field check */
      let valid = true;
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#c0392b';
          field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
        }
      });
      if (!valid) {
        e.preventDefault();
        form.querySelector('[required]:not(:valid)')?.focus();
      }
    });
  });
}
initForms();

/* --- Lazy-load images (native loading="lazy" is in HTML; this is a polyfill fallback) --- */
if ('loading' in HTMLImageElement.prototype === false) {
  import('https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js').catch(() => {});
}
