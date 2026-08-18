// ===== Mobile nav toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navtoggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // ===== Menu category tab filter (menu.html) =====
  const tabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');
  if (tabs.length && categories.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.target;
        categories.forEach(cat => {
          if (target === 'all' || cat.dataset.category === target) {
            cat.classList.remove('hidden');
          } else {
            cat.classList.add('hidden');
          }
        });
      });
    });
  }

  // ===== Gallery lightbox (gallery.html) =====
  const gItems = document.querySelectorAll('.g-item');
  const lightbox = document.querySelector('.lightbox');
  if (gItems.length && lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbCap = lightbox.querySelector('.lightbox-cap');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    gItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCap.textContent = img.alt;
        lightbox.classList.add('open');
      });
    });
    closeBtn.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

  // ===== Reservation form validation (contact.html) =====
  const form = document.querySelector('form.reserve');
  if (form) {
    const msg = form.querySelector('.form-msg');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll('.field').forEach(field => field.classList.remove('error'));

      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(input => {
        const field = input.closest('.field');
        if (!input.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      const phone = form.querySelector('#phone');
      if (phone && phone.value.trim() && !/^[0-9+\-\s]{7,15}$/.test(phone.value.trim())) {
        phone.closest('.field').classList.add('error');
        valid = false;
      }

      const email = form.querySelector('#email');
      if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.closest('.field').classList.add('error');
        valid = false;
      }

      if (valid) {
        msg.textContent = `Thank you, ${form.querySelector('#name').value.trim()}! Your table request has been received. We'll confirm shortly by phone or email.`;
        msg.classList.add('show', 'ok');
        form.reset();
      } else {
        msg.classList.remove('show', 'ok');
      }
    });
  }
});