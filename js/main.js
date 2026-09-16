// main.js - Core interactive logic for Malik Muneeb's Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTypewriter();
  initStats();
  initSkills();
  initProjects();
  initExperience();
  initEducation();
  initModal();
  initContact();
  initScrollSpy();
});

/* ==========================================================================
   Navbar & Mobile Navigation
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });

    // Close menu when link clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const roleElement = document.querySelector('.hero-role');
  if (!roleElement) return;

  const roles = [
    "Senior Android Engineer",
    "Kotlin Multiplatform (KMP) Developer",
    "Jetpack Compose Specialist",
    "Compose Multiplatform (CMP) Engineer",
    "Fintech & Real-time Apps Architect",
    "Clean Architecture Advocate"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 90;
  const erasingDelay = 45;
  const newTextDelay = 1800;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? erasingDelay : typingDelay);
    }
  }

  setTimeout(type, 800);
}

/* ==========================================================================
   Stats Counter
   ========================================================================== */
function initStats() {
  const statsContainer = document.getElementById('stats-grid');
  if (!statsContainer || !portfolioData.stats) return;

  statsContainer.innerHTML = portfolioData.stats.map(stat => `
    <div class="stat-card">
      <div class="stat-number">${stat.number}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   Skills Rendering
   ========================================================================== */
function initSkills() {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || !portfolioData.skillCategories) return;

  skillsContainer.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="skill-category-card">
      <h3 class="skill-category-title">${cat.category}</h3>
      <div class="skills-list">
        ${cat.skills.map(s => `
          <div class="skill-pill">
            <span>${s.name}</span>
            <span class="badge-level">${s.level}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Projects Rendering & Filtering
   ========================================================================== */
function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!projectsGrid) return;

  renderProjects(portfolioData.projects);

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(portfolioData.projects);
      } else {
        const filtered = portfolioData.projects.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });
}

function renderProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects.map(p => `
    <article class="project-card" data-id="${p.id}">
      <div class="project-banner" style="background: ${p.bannerGradient};">
        <span class="project-badge-top">${p.category.toUpperCase()}</span>
        ${p.featured ? `
          <span class="project-star-badge" title="Featured / Starred Project">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" stroke-width="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Starred</span>
          </span>
        ` : ''}
        <div class="mini-phone-mockup">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <div class="mock-bar colored"></div>
            <div class="mock-bar short"></div>
            <div class="mock-bar medium"></div>
            <div class="mock-chart">
              <div class="chart-col" style="height: 45%;"></div>
              <div class="chart-col" style="height: 80%;"></div>
              <div class="chart-col" style="height: 60%;"></div>
              <div class="chart-col" style="height: 95%;"></div>
              <div class="chart-col" style="height: 70%;"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-tagline">${p.tagline}</p>
        
        <div class="project-tags">
          ${p.tags.slice(0, 4).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          ${p.tags.length > 4 ? `<span class="project-tag">+${p.tags.length - 4}</span>` : ''}
        </div>

        <div class="project-actions">
          <button class="btn btn-secondary btn-sm open-modal-btn" data-id="${p.id}">
            Architecture & Highlights
          </button>
          <div class="project-links">
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-btn" title="View Source Code">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            ` : ''}
            ${p.playStoreUrl ? `
              <a href="${p.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-btn" title="View on Google Play">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.954V2.768c.15-.37.362-.697.609-.954zm11.246 11.248l2.25 2.25-11.83 6.83 9.58-9.08zm0-2.124l-9.58-9.08 11.83 6.83-2.25 2.25zm1.488 1.062l3.434-1.982a1.868 1.868 0 0 1 0 3.238l-3.434 1.982-1.062-1.619 1.062-1.619z"/></svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Attach modal trigger listeners
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-id');
      openProjectModal(projectId);
    });
  });
}

/* ==========================================================================
   Experience Rendering
   ========================================================================== */
function initExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline || !portfolioData.experience) return;

  timeline.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company} • ${exp.location}</span>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Education Rendering
   ========================================================================== */
function initEducation() {
  const eduContainer = document.getElementById('education-container');
  if (!eduContainer || !portfolioData.education) return;

  eduContainer.innerHTML = portfolioData.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-dot" style="border-color: var(--accent-kotlin); box-shadow: 0 0 10px var(--accent-kotlin);"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${edu.degree}</h3>
            <span class="timeline-company" style="color: var(--accent-cyan);">${edu.institution} • ${edu.location}</span>
          </div>
          <span class="timeline-period">${edu.period}</span>
        </div>
        <p class="timeline-desc">${edu.details}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Project Detail Modal
   ========================================================================== */
function initModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modalOverlay) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const titleEl = document.getElementById('modal-title');
  const taglineEl = document.getElementById('modal-tagline');
  const tagsEl = document.getElementById('modal-tags');
  const highlightsEl = document.getElementById('modal-highlights');
  const archEl = document.getElementById('modal-architecture');
  const githubLink = document.getElementById('modal-github');
  const playStoreLink = document.getElementById('modal-playstore');

  if (titleEl) {
    titleEl.innerHTML = project.featured 
      ? `${project.title} <span class="modal-star-badge">★ Starred</span>` 
      : project.title;
  }
  if (taglineEl) taglineEl.textContent = project.tagline;

  if (tagsEl) {
    tagsEl.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  }

  if (highlightsEl) {
    highlightsEl.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');
  }

  if (archEl) {
    archEl.textContent = project.architecture;
  }

  if (githubLink) {
    githubLink.href = project.githubUrl || '#';
    githubLink.style.display = project.githubUrl ? 'inline-flex' : 'none';
  }

  if (playStoreLink) {
    playStoreLink.href = project.playStoreUrl || '#';
    playStoreLink.style.display = project.playStoreUrl ? 'inline-flex' : 'none';
  }

  modalOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
}

/* ==========================================================================
   Contact & Clipboard Actions
   ========================================================================== */
function initContact() {
  // Copy to clipboard handlers
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          showToast("Failed to copy");
        });
      }
    });
  });

  // Contact Form Submission (Mailto / Mock)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const message = document.getElementById('form-message')?.value || '';

      if (!name || !email || !message) {
        showToast("Please fill in all fields.");
        return;
      }

      // Direct Gmail Compose URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}&su=${encodeURIComponent("Portfolio Contact from " + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
      
      const newTab = window.open(gmailUrl, '_blank');
      if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        // Fallback to standard mailto if popup blocked
        window.location.href = `mailto:${portfolioData.personal.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
      }

      showToast("Opening Gmail composer...");
      contactForm.reset();
    });
  }
}

/* Toast message notification */
function showToast(message) {
  let toast = document.querySelector('.toast-message');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-message';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ==========================================================================
   ScrollSpy for Active Navbar Link
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
