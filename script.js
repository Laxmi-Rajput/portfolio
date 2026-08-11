/* ============================================================
   script.js — Vijay Laxmi Singh Portfolio
   Vanilla JavaScript — No frameworks, no build tools.
   Compatible with GitHub Pages static hosting.
   ============================================================ */

'use strict';

/* =========================
   UTILITY HELPERS
========================= */

/**
 * Safely query a single DOM element.
 * @param {string} selector
 * @param {Document|Element} [ctx=document]
 * @returns {Element|null}
 */
function qs(selector, ctx) {
  return (ctx || document).querySelector(selector);
}

/**
 * Safely query all matching DOM elements.
 * @param {string} selector
 * @param {Document|Element} [ctx=document]
 * @returns {NodeList}
 */
function qsa(selector, ctx) {
  return (ctx || document).querySelectorAll(selector);
}

/* =========================
   NAVBAR — SCROLL & ACTIVE STATE
========================= */

(function initNavbar() {
  var navbar   = qs('#navbar');
  var navLinks = qsa('.nav-link');
  var sections = qsa('section[id]');

  if (!navbar) return;

  // Add 'scrolled' class when page is scrolled
  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }

  // Highlight the nav link for the visible section
  function updateActiveLink() {
    var scrollY = window.scrollY + 100;
    var current = '';

    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      var href = link.getAttribute('href');
      if (href && href === '#' + current) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

/* =========================
   HAMBURGER MOBILE MENU
========================= */

(function initMobileMenu() {
  var hamburger = qs('#hamburger');
  var navMenu   = qs('#nav-menu');
  var navLinks  = qsa('.nav-link');

  if (!hamburger || !navMenu) return;

  function toggleMenu(forceClose) {
    var isOpen = hamburger.classList.contains('open');

    if (forceClose || isOpen) {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    } else {
      hamburger.classList.add('open');
      navMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
  }

  // Toggle on hamburger click
  hamburger.addEventListener('click', function () {
    toggleMenu();
  });

  // Close menu when a nav link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(true);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      toggleMenu(true);
      hamburger.focus();
    }
  });
})();

/* =========================
   SMOOTH SCROLLING
========================= */

(function initSmoothScroll() {
  var anchors = qsa('a[href^="#"]');
  var navbarHeight = 68;

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href   = anchor.getAttribute('href');
      // Skip lone "#"
      if (!href || href === '#') return;

      var target = qs(href);
      if (!target) return;

      e.preventDefault();

      var top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  });
})();

/* =========================
   SCROLL REVEAL (IntersectionObserver)
========================= */

(function initScrollReveal() {
  // Respect user's reduced-motion preference
  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Make all elements visible immediately
    qsa('.reveal-up').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  qsa('.reveal-up').forEach(function (el) {
    observer.observe(el);
  });
})();

/* =========================
   PROFILE IMAGE — FALLBACK
========================= */

(function initProfileImageFallback() {
  var img = qs('.profile-image');
  if (!img) return;

  img.addEventListener('error', function () {
    // If profile.jpg is missing, show a styled placeholder
    var frame = qs('.profile-frame');
    if (!frame) return;

    // Remove broken img
    img.style.display = 'none';

    // Create placeholder
    var placeholder = document.createElement('div');
    placeholder.setAttribute('aria-hidden', 'true');
    placeholder.style.cssText = [
      'width: 100%',
      'height: 100%',
      'display: flex',
      'flex-direction: column',
      'align-items: center',
      'justify-content: center',
      'gap: 0.75rem',
      'background: #2D211B',
      'color: #C99A52',
      'font-family: "Plus Jakarta Sans", sans-serif'
    ].join(';');

    var icon = document.createElement('div');
    icon.style.cssText = 'font-size: 3.5rem; opacity: 0.5;';
    icon.textContent = '👤';

    var label = document.createElement('p');
    label.style.cssText = [
      'font-size: 0.78rem',
      'font-weight: 600',
      'letter-spacing: 0.1em',
      'text-transform: uppercase',
      'opacity: 0.6',
      'text-align: center',
      'padding: 0 1rem'
    ].join(';');
    label.textContent = 'Add profile.jpg to assets/';

    placeholder.appendChild(icon);
    placeholder.appendChild(label);
    frame.appendChild(placeholder);
  });
})();

/* =========================
   SKILL ITEMS — STAGGERED ENTRY
========================= */

(function initSkillStagger() {
  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  if (prefersReducedMotion) return;

  var skillItems = qsa('.skill-item');

  skillItems.forEach(function (item) {
    // Start hidden
    item.style.opacity = '0';
    item.style.transform = 'translateX(-10px)';
    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  var skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var items = entry.target.querySelectorAll('.skill-item');
          items.forEach(function (item, i) {
            setTimeout(function () {
              item.style.opacity = '1';
              item.style.transform = 'translateX(0)';
            }, i * 80);
          });
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  qsa('.skill-category').forEach(function (cat) {
    skillObserver.observe(cat);
  });
})();

/* =========================
   ACHIEVEMENT CARDS — NUMBER COUNT-UP
========================= */

(function initCountUp() {
  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  if (prefersReducedMotion) return;

  var scoreEl = qs('.achievement-score');
  if (!scoreEl) return;

  var target   = 95.4;
  var duration = 1200;
  var start    = null;
  var animated = false;

  function animateCount(timestamp) {
    if (!start) start = timestamp;
    var elapsed  = timestamp - start;
    var progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    var eased    = 1 - Math.pow(1 - progress, 3);
    var value    = (target * eased).toFixed(1);
    scoreEl.textContent = value + '%';
    if (progress < 1) {
      requestAnimationFrame(animateCount);
    } else {
      scoreEl.textContent = '95.4%';
    }
  }

  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          requestAnimationFrame(animateCount);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  countObserver.observe(scoreEl.closest('.achievement-card') || scoreEl);
})();

/* =========================
   ACTIVE SECTION HIGHLIGHT
   (for mobile — updates aria-current on scroll)
========================= */

// Already handled in initNavbar above.

/* =========================
   PAGE LOAD — INITIAL VISIBILITY
========================= */

// Make hero content visible on load (above the fold; no observer needed)
(function initHeroVisibility() {
  // Hero elements animate via CSS keyframes (fadeSlideUp),
  // so no JS class toggle needed for them.
  // Ensure hero section is visible immediately.
  var hero = qs('.hero');
  if (hero) {
    hero.style.opacity = '1';
  }
})();
