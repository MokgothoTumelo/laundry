// scripts.js – shared interactivity for all pages

document.addEventListener('DOMContentLoaded', function () {
  // ---------- CONTACT FORM (contacts.html) ----------
  const contactForm = document.getElementById('contact-form');
  const feedbackEl = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const message = document.getElementById('message')?.value.trim() || '';

      if (!name || !email || !message) {
        if (feedbackEl) {
          feedbackEl.textContent = 'Please fill in all fields.';
          feedbackEl.style.color = '#b91c1c';
        }
        return;
      }

      // simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        if (feedbackEl) {
          feedbackEl.textContent = 'Please enter a valid email address.';
          feedbackEl.style.color = '#b91c1c';
        }
        return;
      }

      // simulate sending (demo)
      if (feedbackEl) {
        feedbackEl.textContent = 'Thank you! We\'ll get back to you soon.';
        feedbackEl.style.color = '#1a5f7a';
      }

      // optionally reset form after short delay
      setTimeout(() => {
        if (contactForm) contactForm.reset();
        if (feedbackEl) {
          feedbackEl.textContent = '';
        }
      }, 3000);
    });
  }

  // ---------- GALLERY IMAGE CLICK (gallery.html) ----------
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach(card => {
    card.addEventListener('click', function () {
      const img = this.querySelector('img');
      const label = this.querySelector('.gallery-label');
      if (img) {
        // show a simple alert with the label (demo interaction)
        const labelText = label ? label.textContent : 'image';
        alert(`📸 You clicked: ${labelText}\n(larger view demo)`);
      }
    });
  });

  // ---------- NAV ACTIVE STATE (client-side navigation highlight) ----------
  // get current page filename from URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});