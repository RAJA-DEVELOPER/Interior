/* ============================================================
   LUMIÈRE INTERIORS — main.js
   All interactivity: navbar, footer, sliders, lightbox,
   accordion, before/after, filters, countdown, forms, reveals
   ============================================================ */

/* ── Navbar HTML ── */
const NAVBAR_HTML = `
<nav class="navbar transparent" id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="logo-main">Lumière</span>
    </a>
    <ul class="nav-menu">
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li><a href="home-niche.html" class="nav-link">Home 2</a></li>
      <li><a href="about.html" class="nav-link">About</a></li>
      <li><a href="services.html" class="nav-link">Services</a></li>
      <li><a href="gallery.html" class="nav-link">Projects</a></li>
      <li><a href="blog.html" class="nav-link">Journal</a></li>
      <li><a href="pricing.html" class="nav-link">Pricing</a></li>
      <li><a href="contact.html" class="nav-link">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <div class="nav-item">
        <a href="javascript:void(0)" class="nav-link account-link" aria-label="Account Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </a>
        <div class="dropdown account-dropdown">
          <div class="dropdown-header">Account Access</div>
          <a href="login.html" class="dropdown-item">
            <span class="d-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg></span>
            <span class="d-text">Login / Sign Up</span>
          </a>
          <a href="user-dashboard.html" class="dropdown-item">
            <span class="d-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></span>
            <span class="d-text">User Dashboard</span>
          </a>
          <a href="dashboard.html" class="dropdown-item">
            <span class="d-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
            <span class="d-text">Admin Dashboard</span>
          </a>
        </div>
      </div>
      <div class="nav-cta">
        <a href="contact.html" class="btn btn-primary">Book Consultation</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-overlay" id="mobileOverlay"></div>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose">&#x2715;</button>
  <a href="index.html" class="mobile-nav-link">Home</a>
  <a href="home-niche.html" class="mobile-nav-link">Home 2</a>
  <a href="about.html" class="mobile-nav-link">About</a>
  <a href="services.html" class="mobile-nav-link">Services</a>
  <a href="gallery.html" class="mobile-nav-link">Projects</a>
  <a href="blog.html" class="mobile-nav-link">Journal</a>
  <a href="pricing.html" class="mobile-nav-link">Pricing</a>
  <a href="faq.html" class="mobile-nav-link">FAQ</a>
  <a href="contact.html" class="mobile-nav-link">Contact</a>
  <div style="margin-top:28px;">
    <a href="login.html" class="btn btn-outline" style="width:100%;justify-content:center;margin-bottom:12px;display:flex;">Signup / Login</a>
    <a href="contact.html" class="btn btn-primary" style="width:100%;height:48px;justify-content:center;display:flex;align-items:center">Book Consultation</a>
  </div>
</div>`;

/* ── Footer HTML ── */
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">
          <span class="logo-main">Lumière</span>
        </div>
        <p>We craft spaces that inspire — blending timeless elegance with modern sensibility for discerning clients worldwide.</p>
        <div class="footer-social">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.132-1.867 3.132-4.562 0-2.387-1.715-4.057-4.163-4.057-2.835 0-4.498 2.126-4.498 4.323 0 .856.33 1.773.741 2.274a.3.3 0 0 1 .069.286c-.075.313-.244.995-.277 1.134-.044.183-.146.222-.336.134C6.22 15.75 5.5 13.858 5.5 12.164c0-3.19 2.319-6.123 6.687-6.123 3.511 0 6.239 2.501 6.239 5.84 0 3.484-2.196 6.288-5.247 6.288-1.025 0-1.99-.533-2.32-1.162l-.63 2.353c-.228.876-.843 1.97-1.255 2.636.946.292 1.95.45 2.986.45 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Houzz">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 3v18h7v-7h2v7h7V3h-7v7h-2V3z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Quick Links</h5>
        <nav class="footer-links">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="services.html">Services</a>
          <a href="gallery.html">Projects</a>
          <a href="blog.html">Journal</a>
          <a href="pricing.html">Pricing</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <nav class="footer-links">
          <a href="service-interior.html">Interior Design</a>
          <a href="service-architecture.html">Architecture</a>
          <a href="service-space-planning.html">Space Planning</a>
          <a href="service-visualization.html">3D Visualization</a>
          <a href="service-furniture.html">Furniture Curation</a>
          <a href="service-management.html">Project Management</a>
          <a href="faq.html">FAQ</a>
        </nav>
      </div>
      <div class="footer-col">
        <h5>Contact Us</h5>
        <div>
          <div class="footer-contact-item">
            <span class="ico">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <span>14 Rue de la Paix, Paris, France 75002</span>
          </div>
          <div class="footer-contact-item">
            <span class="ico">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-1l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <span>+33 1 42 00 00 00</span>
          </div>
          <div class="footer-contact-item">
            <span class="ico">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <span>hello@lumiere-interiors.com</span>
          </div>
        </div>
        <h5 style="margin-top:24px;">Newsletter</h5>
        <div class="footer-newsletter">
          <input type="email" placeholder="Your email address">
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Lumière. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms & Conditions</a>
        <a href="sitemap.html">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;

/* ── Inject Navbar & Footer ── */
function injectNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    let finalNav = NAVBAR_HTML;
    
    // Check login state
    const isLoggedIn = localStorage.getItem('lumiere_logged_in') === 'true' || window.location.pathname.includes('dashboard');
    
    if (isLoggedIn) {
      // Dynamic replacement using regex for robustness
      finalNav = finalNav.replace(/Signup\/Login/gi, 'Logout');
      finalNav = finalNav.replace(/Signup \/ Login/gi, 'Logout');
      finalNav = finalNav.replace(/Login \/ Sign Up/gi, 'Logout');
      finalNav = finalNav.replace(/Login\/Sign Up/gi, 'Logout');
      
      // Swap icon for logout (Exit icon)
      const loginIcon = '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>';
      const logoutIcon = '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>';
      finalNav = finalNav.replace(loginIcon, logoutIcon);

      // Change the link and add the logout-trigger class cleanly
      finalNav = finalNav.replace('href="login.html" class="dropdown-item"', 'href="#" class="dropdown-item logout-trigger"');
      // For the mobile menu link
      finalNav = finalNav.replace('href="login.html" class="btn btn-outline"', 'href="#" class="btn btn-outline logout-trigger"');
    }
    
    placeholder.innerHTML = finalNav;
    
    // If we just injected a logout trigger, attach the event
    const triggers = placeholder.querySelectorAll('.logout-trigger');
    triggers.forEach(t => {
      t.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('lumiere_logged_in');
        window.location.href = 'index.html';
      });
    });
  }
}
function injectFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = FOOTER_HTML;
  }
}

/* ── Navbar Scroll Effect ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const scrolled = () => {
    if (window.scrollY > 60) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', scrolled);
  scrolled();

  // Active link
  const links = navbar.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname.split('/').pop() ||
        link.getAttribute('href') === window.location.href) {
      link.classList.add('active');
    }
  });

  // Mobile menu
  const toggle   = document.getElementById('navToggle');
  const menu     = document.getElementById('mobileMenu');
  const overlay  = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mobileClose');

  const openMenu = () => {
    toggle.classList.add('open');
    menu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (toggle)   toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay)  overlay.addEventListener('click', closeMenu);

  // Dropdown click for mobile & tablet (links)
  const navItems = navbar.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const link = item.querySelector('.nav-link:not(.account-link)');
    if (link) {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1100) {
          closeMenu();
          const dropdown = item.querySelector('.dropdown');
          if (dropdown) {
            const isVisible = dropdown.classList.contains('mobile-visible');
            navbar.querySelectorAll('.dropdown').forEach(d => d.classList.remove('mobile-visible'));
            if (!isVisible) dropdown.classList.add('mobile-visible');
          }
        }
      });
    }
  });

  // Account Menu Toggle on Click (All screen sizes)
  const accountLink = navbar.querySelector('.account-link');
  const accountDropdown = navbar.querySelector('.account-dropdown');
  if (accountLink && accountDropdown) {
    accountLink.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      accountDropdown.classList.toggle('active');
    });

    // Close when clicking elsewhere
    document.addEventListener('click', (e) => {
      if (!accountDropdown.contains(e.target) && !accountLink.contains(e.target)) {
        accountDropdown.classList.remove('active');
      }
    });
  }
}

/* ── Scroll Reveal ── */
function initReveal() {
  const els = Array.from(document.querySelectorAll('.reveal, .reveal-left, .reveal-right'));
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { 
        e.target.classList.add('visible'); 
        io.unobserve(e.target); 
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── Testimonial Slider ── */
function initTestimonials() {
  document.querySelectorAll('.testimonial-slider').forEach(slider => {
    const track  = slider.querySelector('.testimonial-track');
    const slides = slider.querySelectorAll('.testimonial-slide');
    const dots   = slider.querySelectorAll('.t-dot');
    const prevBtn = slider.querySelector('.t-btn-prev');
    const nextBtn = slider.querySelector('.t-btn-next');
    let cur = 0, timer;

    const go = (idx) => {
      cur = (idx + slides.length) % slides.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    };

    const auto = () => { timer = setInterval(() => go(cur + 1), 5000); };
    const reset = () => { clearInterval(timer); auto(); };

    if (prevBtn) prevBtn.addEventListener('click', () => { go(cur - 1); reset(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { go(cur + 1); reset(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); reset(); }));
    go(0); auto();
  });
}

/* ── Lightbox ── */
let lbImages = [], lbCur = 0;
function initLightbox() {
  // Build lightbox DOM once
  if (!document.getElementById('lightbox')) {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `
      <div class="lightbox-inner">
        <button class="lightbox-close" id="lbClose">&#x2715;</button>
        <button class="lb-prev" id="lbPrev">&#8592;</button>
        <img class="lightbox-img" id="lbImg" src="" alt="">
        <button class="lb-next" id="lbNext">&#8594;</button>
        <div class="lightbox-caption" id="lbCaption"></div>
      </div>`;
    document.body.appendChild(lb);

    document.getElementById('lbClose').addEventListener('click', closeLb);
    document.getElementById('lbPrev').addEventListener('click', () => lbGo(lbCur - 1));
    document.getElementById('lbNext').addEventListener('click', () => lbGo(lbCur + 1));
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') lbGo(lbCur - 1);
      if (e.key === 'ArrowRight') lbGo(lbCur + 1);
    });
  }

  // Collect gallery items
  lbImages = [];
  document.querySelectorAll('[data-lightbox]').forEach((el, i) => {
    const src   = el.dataset.src   || el.querySelector('img')?.src || '';
    const cap   = el.dataset.caption || el.querySelector('.gtitle')?.textContent || '';
    lbImages.push({ src, cap });
    el.addEventListener('click', () => openLb(i));
  });
}

function openLb(idx) {
  lbCur = idx;
  lbGo(idx);
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbGo(idx) {
  lbCur = (idx + lbImages.length) % lbImages.length;
  document.getElementById('lbImg').src = lbImages[lbCur].src;
  document.getElementById('lbCaption').textContent = lbImages[lbCur].cap;
}

/* ── Accordion / FAQ ── */
function initAccordion() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body   = item.querySelector('.accordion-body');
    if (!header || !body) return;
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.accordion-body').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* ── Before/After Slider ── */
function initBeforeAfter() {
  document.querySelectorAll('.before-after').forEach(ba => {
    const beforeWrap = ba.querySelector('.ba-before-wrap');
    const handle     = ba.querySelector('.ba-handle');
    let dragging = false;

    const setPos = (x) => {
      const rect = ba.getBoundingClientRect();
      let pct = ((x - rect.left) / rect.width) * 100;
      pct = Math.max(5, Math.min(95, pct));
      beforeWrap.style.width = pct + '%';
      handle.style.left = pct + '%';
    };

    ba.addEventListener('mousedown',  () => dragging = true);
    window.addEventListener('mouseup',() => dragging = false);
    window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });

    ba.addEventListener('touchstart', e => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend',   () => dragging = false);
    window.addEventListener('touchmove',  e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });

    setPos(ba.getBoundingClientRect().left + ba.getBoundingClientRect().width / 2);
  });
}

/* ── Category Filter ── */
function initFilter() {
  document.querySelectorAll('.filter-bar[data-target]').forEach(bar => {
    const btns = bar.querySelectorAll('.filter-btn');
    const container = document.querySelector(bar.dataset.target);
    if (!container) return;
    const items = container.querySelectorAll('[data-cat]');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        items.forEach(item => {
          const show = cat === 'all' || item.dataset.cat === cat;
          item.style.display = show ? '' : 'none';
          if (show) { item.style.opacity = '0'; setTimeout(() => { item.style.opacity = '1'; item.style.transition = 'opacity 0.4s'; }, 10); }
        });
      });
    });
  });

  const sSearch = document.getElementById('serviceSearch');
  if (sSearch) {
    sSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.services-grid [data-cat]').forEach(item => {
        const title = item.querySelector('h4, .card-title')?.textContent.toLowerCase() || '';
        item.style.display = title.includes(term) ? '' : 'none';
      });
    });
  }
}

/* ── Countdown Timer (maintenance) ── */
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const target = new Date(el.dataset.target || '2025-01-01T00:00:00').getTime();
  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) { el.textContent = 'Launching!'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    ['days','hours','minutes','seconds'].forEach((id, i) => {
      const cel = document.getElementById(id);
      if (cel) cel.textContent = [d,h,m,s][i].toString().padStart(2,'0');
    });
  };
  tick(); setInterval(tick, 1000);
}

/* ── Parallax Hero ── */
function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.35}px)`;
  }, { passive: true });
}

/* ── Lazy Images ── */
function initLazyLoad() {
  const imgs = document.querySelectorAll('img[data-src]');
  if (!imgs.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.src = e.target.dataset.src;
        e.target.removeAttribute('data-src');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '200px' });
  imgs.forEach(img => io.observe(img));
}

/* ── Contact Form Validation ── */
function initForms() {
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(field => {
        const group = field.closest('.form-group');
        const err   = group?.querySelector('.form-error-msg');
        if (!field.value.trim()) {
          valid = false;
          group?.classList.add('error');
          if (err) err.textContent = 'This field is required.';
        } else if (field.type === 'email' && !/\S+@\S+\.\S+/.test(field.value)) {
          valid = false;
          group?.classList.add('error');
          if (err) err.textContent = 'Please enter a valid email.';
        } else {
          group?.classList.remove('error');
          if (err) err.textContent = '';
        }
      });
      if (valid) {
        const btn = form.querySelector('[type=submit]');
        if (form.closest('.auth-form-wrap')) {
          if (btn) { btn.textContent = 'Authenticating...'; btn.disabled = true; }
          setTimeout(() => { 
            localStorage.setItem('lumiere_logged_in', 'true');
            window.location.href = 'index.html'; 
          }, 1200);
        } else {
          if (btn) { btn.textContent = 'Message Sent! ✓'; btn.disabled = true; }
        }
      }
    });
    form.querySelectorAll('[required]').forEach(field => {
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (field.value.trim()) {
          group?.classList.remove('error');
          const err = group?.querySelector('.form-error-msg');
          if (err) err.textContent = '';
        }
      });
    });
  });
}

/* ── Stat Counter Animate ── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const end = parseInt(el.dataset.count);
      const dur = 1800;
      const step= 16;
      const inc = end / (dur / step);
      let cur = 0;
      const timer = setInterval(() => {
        cur += inc;
        if (cur >= end) { cur = end; clearInterval(timer); }
        el.textContent = Math.floor(cur) + (el.dataset.suffix || '');
      }, step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

/* ── Page Transition ── */
function initPageTransition() {
  const body = document.body;
  if (!body) return;

  // Set initial state and transition for fade effect
  body.style.transition = 'opacity 0.3s ease-out';
  body.style.opacity = '1';

  // Fix: Handle Back/Forward Cache (BFCache) 
  // This fires when the page is restored from cache (back button), ensuring the screen isn't left transparent.
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      body.style.opacity = '1';
    }
  });

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="tel"])');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href || href.startsWith('javascript') || e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1) return;
    
    // Check if it's the same page anchor (already handled in smooth scroll)
    if (href.startsWith('#')) return;

    e.preventDefault();
    body.style.opacity = '0';
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
}

/* ── Auth Tab Switch ── */
function initAuthTabs() {
  const tabs = document.querySelectorAll('.auth-tab');
  const panels = document.querySelectorAll('.auth-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Password Visibility Toggle ── */
function initPassToggle() {
  document.querySelectorAll('.pass-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;
      
      const isOpen = input.type === 'text';
      input.type = isOpen ? 'password' : 'text';
      
      // Toggle Icons
      const eyeOpen = btn.querySelector('.eye-open');
      const eyeClosed = btn.querySelector('.eye-closed');
      if (eyeOpen && eyeClosed) {
        eyeOpen.classList.toggle('hidden', !isOpen);
        eyeClosed.classList.toggle('hidden', isOpen);
      }
    });
  });
}

/* ── Social Login Logic (Simulated) ── */
function initSocialLogin() {
  document.querySelectorAll('.auth-social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const provider = btn.textContent.trim();
      const originalContent = btn.innerHTML;
      
      // Loading State
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner" style="width:16px;height:16px;border:2px solid;border-top-color:transparent;border-radius:50%;display:inline-block;animation:spin 0.8s linear infinite;margin-right:8px"></span> Connecting to ${provider}...`;
      
      // Simulated Redirect
      setTimeout(() => {
        localStorage.setItem('lumiere_logged_in', 'true');
        window.location.href = 'index.html';
      }, 1500);
    });
  });
}

/* ── Init All ── */
document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
  initNavbar();
  initReveal();
  initTestimonials();
  initLightbox();
  initAccordion();
  initBeforeAfter();
  initFilter();
  initCountdown();
  initParallax();
  initLazyLoad();
  initForms();
  initCounters();
  initPageTransition();
  initAuthTabs();
  initSmoothScroll();
  initPassToggle();
  initSocialLogin();
});
