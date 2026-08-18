// ===== Surya Blood Bank — shared front-end behaviour =====

document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
        q.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* Inventory bar-fill animation (stock levels) */
  document.querySelectorAll('.bar-fill').forEach(function (bar) {
    var pct = bar.getAttribute('data-pct') || 0;
    requestAnimationFrame(function () { bar.style.width = pct + '%'; });
  });

  /* Generic front-end-only form submit handler (no backend — student project demo) */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var successBox = form.parentElement.querySelector('.form-success') || document.getElementById(form.getAttribute('data-success-target'));
      if (successBox) {
        successBox.classList.add('show');
        successBox.setAttribute('tabindex', '-1');
        successBox.focus();
      }
      form.reset();
    });
  });

  /* Blood-group availability lookup (client-side demo data on request.html) */
  var stock = { 'A+': 42, 'A-': 11, 'B+': 37, 'B-': 8, 'AB+': 19, 'AB-': 4, 'O+': 63, 'O-': 15 };
  var lookupForm = document.getElementById('lookup-form');
  if (lookupForm) {
    lookupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var group = document.getElementById('lookup-group').value;
      var result = document.getElementById('lookup-result');
      if (!group) return;
      var units = stock[group];
      var status = units > 25 ? 'Good availability' : units > 10 ? 'Limited stock' : 'Critically low — donors urgently needed';
      var color = units > 25 ? 'var(--sage)' : units > 10 ? 'var(--sand)' : 'var(--crimson)';
      result.innerHTML =
        '<strong style="color:' + color + '">' + group + ': ' + units + ' units available</strong>' +
        '<br><span class="mono" style="font-size:.85rem;color:var(--ink-soft)">' + status + '</span>';
      result.style.display = 'block';
    });
  }

  /* Set active nav link based on current page */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('current');
  });

});
