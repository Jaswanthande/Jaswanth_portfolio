/**
 * Jaswanth Ande - Professional Developer Portfolio
 * Main Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTerminalTabs();
  initSkillFiltering();
  initProjectModals();
  initResumeModals();
  initEmailCopy();
  initContactForm();
  initScrollReveals();
  initBackToTop();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = mobileMenuBtn?.querySelector('.hamburger-icon');
  const closeIcon = mobileMenuBtn?.querySelector('.close-icon');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll appearance
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  mobileMenuBtn?.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu?.classList.toggle('hidden');
    hamburgerIcon?.classList.toggle('hidden');
    closeIcon?.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
      hamburgerIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    });
  });

  // Active section tracking via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));
}

/* ==========================================================================
   2. HERO TERMINAL TABS & TELEMETRY
   ========================================================================== */
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab');
  const codeBlocks = {
    nlp: document.getElementById('tab-nlp'),
    vision: document.getElementById('tab-vision'),
    mern: document.getElementById('tab-mern')
  };
  const statusText = document.getElementById('terminal-status-text');

  const telemetryInfo = {
    nlp: "Pipeline Status: Operational (NLTK + TF-IDF)",
    vision: "Pipeline Status: Active Video Stream (YOLO 30fps)",
    mern: "API Status: REST Endpoints Online (MERN)"
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      Object.keys(codeBlocks).forEach(key => {
        if (key === target) {
          codeBlocks[key]?.classList.remove('hidden');
          codeBlocks[key]?.classList.add('active');
        } else {
          codeBlocks[key]?.classList.add('hidden');
          codeBlocks[key]?.classList.remove('active');
        }
      });

      if (statusText && telemetryInfo[target]) {
        statusText.textContent = telemetryInfo[target];
      }
    });
  });
}

/* ==========================================================================
   3. SKILLS SEARCH & CATEGORY FILTERING
   ========================================================================== */
function initSkillFiltering() {
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');
  const searchInput = document.getElementById('skill-search-input');
  const allBadges = document.querySelectorAll('.skill-badge');

  // Tab Filtering
  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      skillCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Real-Time Skill Search Highlighting
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
      allBadges.forEach(badge => badge.classList.remove('matched'));
      return;
    }

    allBadges.forEach(badge => {
      const text = badge.textContent.toLowerCase();
      if (text.includes(query)) {
        badge.classList.add('matched');
      } else {
        badge.classList.remove('matched');
      }
    });
  });
}

/* ==========================================================================
   4. PROJECT DETAILS MODAL
   ========================================================================== */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-area');
  const closeBtn = document.getElementById('modal-close-btn');
  const viewBtns = document.querySelectorAll('.view-project-btn');

  if (!modal || !modalContent) return;

  function openProjectModal(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;

    modalContent.innerHTML = `
      <div class="space-y-6">
        
        <!-- Header -->
        <div class="border-b border-white/10 pb-5">
          <div class="flex items-center gap-2 mb-2">
            <span class="badge-flagship">${project.badge}</span>
            <span class="text-xs font-mono text-cyan-400 font-semibold">${project.subtitle}</span>
          </div>
          <h2 id="modal-project-title" class="text-2xl sm:text-3xl font-extrabold text-white">
            ${project.title}
          </h2>
          <p class="text-slate-300 text-sm mt-3 leading-relaxed">
            ${project.shortDescription}
          </p>
        </div>

        <!-- Problem & Solution Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-950/70 border border-white/5">
            <h4 class="text-xs font-mono uppercase text-rose-400 font-semibold flex items-center gap-1.5 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              Problem Statement
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ${project.details.problem}
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-950/70 border border-white/5">
            <h4 class="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1.5 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Architectural Solution
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ${project.details.solution}
            </p>
          </div>
        </div>

        <!-- Technology Stack Breakdown -->
        <div>
          <h4 class="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3">
            // Technologies & Architecture
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${project.details.technologiesBreakdown.map(t => `
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/50 border border-white/5">
                <span class="font-mono text-white font-semibold">${t.name}</span>
                <span class="text-slate-400 text-[11px] text-right">${t.role}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Technical Implementation -->
        <div>
          <h4 class="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3">
            // Technical Implementation Steps
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-300">
            ${project.details.technicalImplementation.map(step => `
              <li class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>${step}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Results & Impact -->
        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
          <h4 class="text-xs font-mono uppercase text-cyan-300 font-semibold mb-2 flex items-center gap-2">
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Verified Outcomes & Results
          </h4>
          <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
            ${project.details.results.map(r => `
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span>${r}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Footer Actions -->
        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>GitHub Profile</span>
          </a>
          <button type="button" class="btn btn-ghost btn-sm close-modal-trigger">
            Close Window
          </button>
        </div>

      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Bind inside close trigger
    modalContent.querySelector('.close-modal-trigger')?.addEventListener('click', closeProjectModal);
  }

  function closeProjectModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      if (id) openProjectModal(id);
    });
  });

  closeBtn?.addEventListener('click', closeProjectModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });
}

/* ==========================================================================
   5. RESUME PREVIEW MODAL
   ========================================================================== */
function initResumeModals() {
  const modal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-modal-close-btn');
  const quickPreviewBtn = document.getElementById('quick-preview-resume-btn');
  const ctaPreviewBtn = document.getElementById('cta-preview-resume-btn');

  function openResumeModal() {
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  quickPreviewBtn?.addEventListener('click', openResumeModal);
  ctaPreviewBtn?.addEventListener('click', openResumeModal);
  closeBtn?.addEventListener('click', closeResumeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeResumeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeResumeModal();
    }
  });
}

/* ==========================================================================
   6. EMAIL CLIPBOARD COPY
   ========================================================================== */
function initEmailCopy() {
  const copyButtons = document.querySelectorAll('.copy-pill-btn, #copy-email-hero-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || "jaswanthande98@gmail.com";

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied to clipboard: ${email}`);
        }).catch(() => {
          fallbackCopyText(email);
        });
      } else {
        fallbackCopyText(email);
      }
    });
  });
}

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`Copied to clipboard: ${text}`);
  } catch (err) {
    showToast(`Email: ${text}`);
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

/* ==========================================================================
   7. CONTACT FORM VALIDATION & HONEST SUBMISSION HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const banner = document.getElementById('form-status-banner');

  if (!form) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showFieldError('name', true);
      isValid = false;
    } else {
      showFieldError('name', false);
    }

    // Validate Email
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError('email', true);
      isValid = false;
    } else {
      showFieldError('email', false);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showFieldError('subject', true);
      isValid = false;
    } else {
      showFieldError('subject', false);
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showFieldError('message', true);
      isValid = false;
    } else {
      showFieldError('message', false);
    }

    if (!isValid) return;

    // Build mailto URI as authentic client-side fallback
    const recipient = "jaswanthande98@gmail.com";
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameInput.value.trim()}\n` +
      `Email: ${emailInput.value.trim()}\n\n` +
      `Message:\n${messageInput.value.trim()}\n`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Transparent status message
    if (banner) {
      banner.className = "p-4 rounded-xl text-xs font-mono leading-relaxed bg-cyan-950/80 border border-cyan-500/50 text-cyan-200 block";
      banner.innerHTML = `
        <div class="flex items-start gap-2.5">
          <svg class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="text-white block font-sans text-sm mb-1">Message Prepared!</strong>
            Opening your default email application with prefilled details for 
            <strong class="text-white underline">jaswanthande98@gmail.com</strong>.
            <div class="mt-2 text-[11px] text-slate-400">
              Note: This client-side form triggers a direct mailto action. A serverless API (Formspree/EmailJS) can be hooked up if preferred.
            </div>
          </div>
        </div>
      `;
    }

    // Trigger user mail client
    window.location.href = mailtoUrl;
  });

  function showFieldError(field, show) {
    const input = document.getElementById(`contact-${field}`);
    const errorMsg = document.getElementById(`${field}-error`);
    if (show) {
      input?.classList.add('input-error');
      errorMsg?.classList.remove('hidden');
    } else {
      input?.classList.remove('input-error');
      errorMsg?.classList.add('hidden');
    }
  }

  // Clear errors on typing
  [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
    inp?.addEventListener('input', () => {
      inp.classList.remove('input-error');
      const id = inp.id.replace('contact-', '');
      document.getElementById(`${id}-error`)?.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveals() {
  const revealElements = document.querySelectorAll(
    '.glass-card, .project-card, .stat-card, .skill-card'
  );

  revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   9. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  btn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
