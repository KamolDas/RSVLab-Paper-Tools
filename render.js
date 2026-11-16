/* ============================================================
   RSV LAB — RENDER ENGINE v4
   Reads window.SITE and builds the whole page.
   Only edit content.js for content changes.
   ============================================================ */

(function render() {
  "use strict";

  const $   = id => document.getElementById(id);
  const has = v  => Array.isArray(v) ? v.length > 0 : (v !== undefined && v !== null && v !== '');
  const esc = s  => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
  const hideSection = id => {
    const el = $(id);
    if (el) { const s = el.closest('section'); if (s) s.style.display = 'none'; }
  };

  /* ── Verify content loaded ─────────────────────────────── */
  const S = window.SITE;
  if (!S) {
    console.error('[RSV Lab] window.SITE missing.');
    const b = document.createElement('div');
    b.textContent = 'Content failed to load — content.js was not found.';
    b.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#fee2e2;color:#991b1b;padding:14px;text-align:center;font-family:sans-serif;z-index:9999;';
    document.body.prepend(b);
    return;
  }

  /* ── PDF MODAL ─────────────────────────────────────────── */
  const pdfModal = $('pdf-modal');
  const pdfFrame = $('pdf-modal-frame');
  const pdfTitle = $('pdf-modal-title');
  const pdfDl    = $('pdf-modal-download');

  function openPdf(url, title) {
    if (!pdfModal || !url) return;
    pdfFrame.src = url;
    pdfTitle.textContent = title || 'Document';
    pdfDl.href = url;
    pdfDl.setAttribute('download', url.split('/').pop() || 'document.pdf');
    pdfModal.classList.add('active');
    pdfModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closePdf() {
    if (!pdfModal) return;
    pdfModal.classList.remove('active');
    pdfModal.setAttribute('aria-hidden', 'true');
    pdfFrame.src = 'about:blank';
    document.body.style.overflow = '';
  }
  if (pdfModal) {
    pdfModal.querySelectorAll('[data-close-modal]').forEach(el =>
      el.addEventListener('click', closePdf));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePdf(); });
  }

  function bindPdfButtons(root) {
    if (!root) return;
    root.querySelectorAll('[data-pdf]').forEach(btn =>
      btn.addEventListener('click', () => openPdf(btn.dataset.pdf, btn.dataset.title)));
  }

  /* ── HEADER: logo, nav, socials ────────────────────────── */
  const shortName = (S.shortName || S.labName || 'Lab').trim();
  const parts = shortName.split(/\s+/);
  const logoEl = $('nav-logo');
  if (logoEl) {
    const img = S.logo
      ? `<img src="${esc(S.logo)}" alt="" loading="lazy" onerror="this.style.display='none'">`
      : '';
    logoEl.innerHTML = img
      + `<span>${esc(parts[0] || '')}</span>`
      + (parts.length > 1 ? ` <span class="purple">${esc(parts.slice(1).join(' '))}</span>` : '');
  }

  const navLinksEl = $('nav-links');
  if (navLinksEl) {
    let html = (S.nav || []).map(n => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join('');
    if (S.partnerLabUrl) {
      html += `<a href="${esc(S.partnerLabUrl)}" target="_blank" rel="noopener" class="partner-pill">
                 <i class="fas fa-flask"></i> ${esc(S.partnerLabText || 'Partner')}
               </a>`;
    }
    navLinksEl.innerHTML = html;
  }

  const navIconsEl = $('nav-icons');
  if (navIconsEl) {
    navIconsEl.innerHTML = [
      S.github   ? `<a href="${esc(S.github)}"   target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>`   : '',
      S.facebook ? `<a href="${esc(S.facebook)}" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>` : '',
      S.youtube  ? `<a href="${esc(S.youtube)}"  target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>`  : '',
      S.linkedin ? `<a href="${esc(S.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>` : ''
    ].join('');
  }

  /* ── HERO ──────────────────────────────────────────────── */
  if (S.labName) document.title = `${S.labName} | ${S.tagline || ''}`.trim();

  const heroTitleEl = $('hero-title');
  if (heroTitleEl) {
    heroTitleEl.innerHTML = `${esc(S.taglinePart1 || '')} ` +
      (S.taglinePart2 ? `<span class="purple">${esc(S.taglinePart2)}</span>` : '');
  }

  const heroSubEl = $('hero-subtitle');
  if (heroSubEl) heroSubEl.textContent = S.description || '';

  const heroBadgeEl = $('hero-badge');
  if (heroBadgeEl) {
    if (has(S.heroBadge)) {
      const name = S.founderName || '';
      const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Lab')}&background=FF8C00&color=fff&size=56`;
      heroBadgeEl.innerHTML = `<img src="${avatar}" alt="${esc(name)}" loading="lazy">${esc(S.heroBadge)}`;
    } else {
      heroBadgeEl.style.display = 'none';
    }
  }

  const heroCtasEl = $('hero-ctas');
  if (heroCtasEl) {
    let html = '';
    if (S.heroCtaPrimary)   html += `<a href="${esc(S.heroCtaPrimary.href)}" class="btn btn-primary">${esc(S.heroCtaPrimary.label)} <i class="fas fa-arrow-right"></i></a>`;
    if (S.heroCtaSecondary) html += `<a href="${esc(S.heroCtaSecondary.href)}" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fab fa-github"></i> ${esc(S.heroCtaSecondary.label)}</a>`;
    heroCtasEl.innerHTML = html;
  }

  const heroHighlightsEl = $('hero-highlights');
  if (heroHighlightsEl) {
    if (has(S.heroHighlights)) {
      heroHighlightsEl.innerHTML = S.heroHighlights
        .map(h => `<span class="hero-highlight"><i class="fas ${esc(h.icon)}"></i> ${esc(h.label)}</span>`)
        .join('');
    } else {
      heroHighlightsEl.style.display = 'none';
    }
  }

  const heroBannerEl = $('hero-banner');
  if (heroBannerEl) {
    if (S.heroBanner && S.heroBanner.image) {
      const img = `<img src="${esc(S.heroBanner.image)}" alt="${esc(S.heroBanner.alt || '')}" loading="lazy">`;
      heroBannerEl.innerHTML = S.heroBanner.link
        ? `<a href="${esc(S.heroBanner.link)}" target="_blank" rel="noopener">${img}</a>`
        : img;
    } else {
      heroBannerEl.style.display = 'none';
    }
  }

  /* ── NOTICE BOARD ──────────────────────────────────────── */
  const topNoticesEl = $('top-notices');
  if (topNoticesEl) {
    if (!S.topNotices) {
      topNoticesEl.style.display = 'none';
    } else {
      const build = (item, variant) => {
        if (!item) return '';
        const datePart = item.date ? ` <span class="notice-date">— ${esc(item.date)}</span>` : '';
        const inner = `<span class="notice-dot"></span><span class="notice-label">${esc(item.label || '')}</span><span class="notice-text">${esc(item.text || '')}${datePart}</span>`;
        return item.link
          ? `<a class="top-notice ${variant}" href="${esc(item.link)}" target="_blank" rel="noopener">${inner}</a>`
          : `<div class="top-notice ${variant}">${inner}</div>`;
      };
      const u = build(S.topNotices.update,   'notice-update');
      const d = build(S.topNotices.deadline, 'notice-deadline');
      if (u || d) topNoticesEl.innerHTML = u + d;
      else topNoticesEl.style.display = 'none';
    }
  }

  /* ── CARD TEMPLATE ─────────────────────────────────────── */
  function cardHTML(c) {
    const iconClass = (c.icon || '').includes(' ') ? c.icon : `fas ${c.icon || 'fa-circle'}`;
    const image = c.image
      ? `<img src="${esc(c.image)}" alt="${esc(c.title || '')}" class="card-image" loading="lazy">`
      : '';

    let btns = '';
    if (c.link) {
      btns += `<a href="${esc(c.link)}" target="_blank" rel="noopener" class="card-link">${esc(c.cta || 'Learn More')} <i class="fas fa-arrow-right"></i></a>`;
    }
    if (c.pdf) {
      btns += `<button class="card-link card-link-pdf" data-pdf="${esc(c.pdf)}" data-title="${esc(c.title || '')}"><i class="fas fa-file-pdf"></i> Read PDF</button>`;
    }

    return `<div class="card" style="--card-accent: ${esc(c.color || 'var(--primary-blue)')}">
      ${image}
      <div class="card-icon"><i class="${esc(iconClass)}"></i></div>
      <h3 class="card-title">${esc(c.title || '')}</h3>
      <p class="card-text">${esc(c.text || '')}</p>
      ${btns ? `<div class="card-actions">${btns}</div>` : ''}
    </div>`;
  }

  function renderCardsSection(prefix, data) {
    if (!data || !has(data.cards)) { hideSection(prefix); return; }
    const tEl = $(prefix + '-title');
    if (tEl) tEl.innerHTML = String(data.title || '').replace(/(\S+)\s*$/, '<span>$1</span>');
    const sEl = $(prefix + '-subtitle');
    if (sEl) sEl.textContent = data.subtitle || '';
    const gEl = $(prefix + '-cards');
    if (gEl) {
      gEl.innerHTML = data.cards.map(cardHTML).join('');
      bindPdfButtons(gEl);
    }
  }

  renderCardsSection('about',    S.about);
  renderCardsSection('research', S.research);
  renderCardsSection('tools',    S.tools);

  /* ── PUBLICATIONS ──────────────────────────────────────── */
  if (S.publications && has(S.publications.items)) {
    const tEl = $('publications-title');
    if (tEl) tEl.innerHTML = String(S.publications.title || '').replace(/(\S+)\s*$/, '<span>$1</span>');
    const sEl = $('publications-subtitle');
    if (sEl) sEl.textContent = S.publications.subtitle || '';
    const lEl = $('publications-list');
    if (lEl) {
      lEl.innerHTML = S.publications.items.map(p => `
        <div class="publication-item">
          <h3 class="pub-title">${esc(p.title || '')}</h3>
          ${p.authors ? `<p class="pub-authors">${esc(p.authors)}</p>` : ''}
          ${p.journal ? `<p class="pub-journal">${esc(p.journal)}</p>` : ''}
          <div class="pub-links">
            ${p.doi ? `<a href="${esc(p.doi)}" target="_blank" rel="noopener" class="pub-link"><i class="fas fa-external-link-alt"></i> DOI</a>` : ''}
            ${p.pdf ? `<button class="pub-link pub-read" data-pdf="${esc(p.pdf)}" data-title="${esc(p.title)}"><i class="fas fa-file-pdf"></i> Read</button>` : ''}
          </div>
        </div>`).join('');
      bindPdfButtons(lEl);
    }
  } else {
    hideSection('publications');
  }

  /* ── PROJECTS ──────────────────────────────────────────── */
  if (S.projects && has(S.projects.cards)) {
    const tEl = $('projects-title');
    if (tEl) tEl.innerHTML = String(S.projects.title || '').replace(/(\S+)\s*$/, '<span>$1</span>');
    const sEl = $('projects-subtitle');
    if (sEl) sEl.textContent = S.projects.subtitle || '';

    const tabsEl = $('projects-tabs');
    if (tabsEl && has(S.projects.filters)) {
      tabsEl.innerHTML = S.projects.filters
        .map((f, i) => `<button class="${i === 0 ? 'active' : ''}" data-filter="${esc(f.key)}">${esc(f.label)}</button>`)
        .join('');
      tabsEl.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          tabsEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const key = btn.dataset.filter;
          document.querySelectorAll('.project-card').forEach(card => {
            const show = (key === 'all' || card.dataset.category === key);
            card.style.display = show ? 'flex' : 'none';
          });
        });
      });
    }

    const gEl = $('projects-cards');
    if (gEl) {
      gEl.innerHTML = S.projects.cards.map(p => `
        <div class="card project-card" data-category="${esc(p.category || 'all')}"
             style="--card-accent: ${esc(p.color || 'var(--primary-blue)')}">
          <div class="card-icon"><i class="fas ${esc(p.icon || 'fa-code')}"></i></div>
          <h3 class="card-title">${esc(p.title || '')}</h3>
          <p class="card-text">${esc(p.text || '')}</p>
          <a href="${esc(p.link)}" target="_blank" rel="noopener" class="card-link">View Repository <i class="fas fa-arrow-right"></i></a>
        </div>`).join('');
    }
  } else {
    hideSection('projects');
  }

  /* ── TEAM ──────────────────────────────────────────────── */
  const team = S.team;
  if (team && (team.name || has(team.members))) {
    const tEl = $('team-title');
    if (tEl) tEl.innerHTML = String(team.title || '').replace(/(\S+)\s*$/, '<span>$1</span>');

    const fEl = $('team-founder');
    if (fEl) {
      const avatar = team.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name || 'Lab')}&background=7614DC&color=fff&size=200`;
      fEl.innerHTML = `
        <img src="${esc(avatar)}" alt="${esc(team.name || '')}" class="founder-avatar" loading="lazy"
             onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(team.name || 'Lab')}&background=7614DC&color=fff&size=200'">
        <div class="founder-info">
          <h3>${esc(team.name || '')}</h3>
          <p class="role">${esc(team.role || '')}</p>
          <p>${esc(team.bio || '')}</p>
          <div class="founder-social">
            ${S.github ? `<a href="${esc(S.github)}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>` : ''}
            ${S.email  ? `<a href="mailto:${esc(S.email)}" aria-label="Email"><i class="fas fa-envelope"></i></a>` : ''}
            ${team.orcid ? `<a href="${esc(team.orcid)}" target="_blank" rel="noopener" aria-label="ORCID"><i class="fab fa-orcid"></i></a>` : ''}
          </div>
        </div>`;
    }

    const mEl = $('team-members');
    if (mEl) {
      if (has(team.members)) {
        mEl.innerHTML = team.members.map(m => `
          <a class="member" href="${esc(m.url || '#')}" target="_blank" rel="noopener">
            <img src="${esc(m.avatar || '')}" alt="${esc(m.name || '')}" loading="lazy"
                 onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name || '')}&background=7614DC&color=fff&size=90'">
            <div class="member-name">${esc(m.name || '')}</div>
            <div class="member-role">${esc(m.role || '')}</div>
          </a>`).join('');
      } else {
        mEl.style.display = 'none';
      }
    }
  } else {
    hideSection('team');
  }

  /* ── CONTACT ───────────────────────────────────────────── */
  if (S.contact && has(S.contact.cards)) {
    const tEl = $('contact-title');
    if (tEl) tEl.innerHTML = String(S.contact.title || '').replace(/(\S+)\s*$/, '<span>$1</span>');
    const sEl = $('contact-subtitle');
    if (sEl) sEl.textContent = S.contact.subtitle || '';
    const gEl = $('contact-grid');
    if (gEl) {
      const base = S.contact.cards.map(c => `
        <div class="contact-card" style="--card-accent:${esc(c.color || 'var(--primary-blue)')}">
          <div class="contact-icon"><i class="fas ${esc(c.icon || 'fa-circle')}"></i></div>
          <h3 class="contact-title">${esc(c.title || '')}</h3>
          <p class="contact-text">${c.text || ''}</p>
        </div>`).join('');

      const socials = (S.contact.socials || []).map(s => `
        <div class="contact-card" style="--card-accent:${esc(s.color || 'var(--primary-blue)')}">
          <div class="contact-icon"><i class="${esc(s.icon)}"></i></div>
          <h3 class="contact-title">${esc(s.label)}</h3>
          <p class="contact-text">${esc(s.text || '')}</p>
          <a href="${esc(s.url)}" target="_blank" rel="noopener" class="social-btn" style="background-color:${esc(s.color)}">
            <i class="${esc(s.icon)}"></i> ${esc(s.cta || 'Visit')}
          </a>
        </div>`).join('');

      gEl.innerHTML = base + socials;
    }
  } else {
    hideSection('contact');
  }

  /* ── FOOTER ────────────────────────────────────────────── */
  const ftEl = $('footer-tagline');
  if (ftEl && S.footer && S.footer.tagline) ftEl.textContent = S.footer.tagline;
  const fcEl = $('footer-copy');
  if (fcEl) fcEl.textContent = (S.footer && S.footer.copyright) || `© ${S.year || ''} ${S.labName || ''}`.trim();
  const flEl = $('footer-links');
  if (flEl) {
    let html = (S.nav || []).map(n => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join('');
    if (S.partnerLabUrl) html += `<a href="${esc(S.partnerLabUrl)}" target="_blank" rel="noopener">${esc(S.partnerLabText || 'Partner')}</a>`;
    flEl.innerHTML = html;
  }

  /* ── MOBILE NAV ────────────────────────────────────────── */
  const toggleEl = $('nav-toggle');
  const linksEl  = $('nav-links');
  if (toggleEl && linksEl) {
    toggleEl.addEventListener('click', () => {
      const open = linksEl.classList.toggle('open');
      toggleEl.setAttribute('aria-expanded', String(open));
    });
    linksEl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        linksEl.classList.remove('open');
        toggleEl.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── BACK-TO-TOP ───────────────────────────────────────── */
  const backTopEl = $('back-to-top');
  if (backTopEl) {
    window.addEventListener('scroll', () => backTopEl.classList.toggle('visible', window.scrollY > 400));
    backTopEl.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ── SECURE EXTERNAL LINKS ─────────────────────────────── */
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    const rel = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
    if (!rel.includes('noopener'))   rel.push('noopener');
    if (!rel.includes('noreferrer')) rel.push('noreferrer');
    a.setAttribute('rel', rel.join(' '));
  });

  console.log('[RSV Lab] Renderer finished.');
})();