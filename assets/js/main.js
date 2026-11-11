/* global jQuery, SITE */
(function ($, SITE) {
  'use strict';

  // ---------- Helpers ----------
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESC[c]);
  const pad2 = (n) => String(n).padStart(2, '0');
  const ARROW = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  // ---------- Projects ----------
  const Projects = {
    $grid: null,
    $filters: null,

    init() {
      this.$grid = $('#projects-grid');
      this.$filters = $('#project-filters');
      if (!this.$grid.length) return;

      this.renderFilters();
      this.render('all');

      this.$filters.on('click', '[data-filter]', (e) => {
        const id = $(e.currentTarget).data('filter');
        this.$filters.find('[data-filter]').attr('aria-pressed', 'false');
        $(e.currentTarget).attr('aria-pressed', 'true');
        this.render(id);
      });
    },

    renderFilters() {
      const html = SITE.filters.map((f, i) =>
        `<button type="button" class="chip" data-filter="${esc(f.id)}" aria-pressed="${i === 0}">${esc(f.label)}</button>`
      ).join('');
      this.$filters.html(html);
    },

    cover(p) {
      if (p.video) {
        return `
          <button type="button" class="group relative block h-full w-full overflow-hidden rounded-t-lg border-[3px] border-b-0 border-ink bg-ink"
                  data-video="${esc(p.video)}" data-poster="${esc(p.poster || '')}" data-title="${esc(p.name)}"
                  aria-label="Play ${esc(p.name)} promo video">
            <img src="${esc(p.poster || '')}" alt="" loading="lazy" decoding="async"
                 class="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105">
            <span aria-hidden="true" class="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/25">
              <span class="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink bg-comic-red text-white shadow-comic transition-transform group-hover:scale-110">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
              </span>
            </span>
            ${p.duration ? `<span aria-hidden="true" class="absolute bottom-2 right-2 rounded-md bg-ink/85 px-2 py-0.5 text-xs font-bold text-white">▶ ${esc(p.duration)}</span>` : ''}
          </button>`;
      }
      if (p.image) {
        return `<img src="${esc(p.image)}" alt="${esc(p.name)} screenshot" loading="lazy" decoding="async"
                  class="h-full w-full rounded-t-lg border-[3px] border-b-0 border-ink object-cover object-top">`;
      }
      return `
        <div aria-hidden="true" class="flex h-full w-full flex-col overflow-hidden rounded-t-lg border-[3px] border-b-0 border-ink bg-white">
          <div class="flex h-6 shrink-0 items-center gap-1.5 border-b-2 border-ink px-2.5">
            <span class="h-2.5 w-2.5 rounded-full border-2 border-ink bg-comic-red"></span>
            <span class="h-2.5 w-2.5 rounded-full border-2 border-ink bg-comic-yellow"></span>
            <span class="h-2.5 w-2.5 rounded-full border-2 border-ink bg-white"></span>
            <span class="ml-1.5 truncate text-[11px] font-semibold text-body">${esc(p.domain)}</span>
          </div>
          <div class="flex flex-1 flex-col justify-center gap-2.5 p-4">
            <span class="font-display text-3xl tracking-wide" style="color:${esc(p.ink)}">${esc(p.name)}</span>
            <span class="h-2 w-2/3 rounded bg-[#E7E2D6]"></span>
            <span class="h-2 w-1/2 rounded bg-[#E7E2D6]"></span>
          </div>
        </div>`;
    },

    card(p, i) {
      const links = p.links.map((l) =>
        `<a href="${esc(l.href)}" target="_blank" rel="noopener" class="btn-sm">${esc(l.label)}${ARROW}</a>`
      ).join('') + (p.video
        ? `<button type="button" class="btn-sm bg-comic-yellow" data-video="${esc(p.video)}" data-poster="${esc(p.poster || '')}" data-title="${esc(p.name)}">Watch video
             <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></button>`
        : '');
      return `
        <article class="reveal relative flex flex-col rounded-2xl border-[3px] border-ink bg-white shadow-comic-lg">
          <span class="absolute -top-4 left-4 z-10 -rotate-6 border-[3px] border-ink bg-comic-yellow px-3 font-display text-xl tracking-wider shadow-comic-sm">#${pad2(i + 1)}</span>
          <span class="absolute -top-3 right-4 z-10 rotate-3 rounded-full bg-ink px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">${esc(p.platform)}</span>
          <div class="halftone-dark flex aspect-[16/10] items-end justify-center overflow-hidden rounded-t-[13px] border-b-[3px] border-ink px-6 pt-8"
               style="background-color:${esc(p.bg)}">${this.cover(p)}</div>
          <div class="flex flex-1 flex-col gap-2.5 p-6">
            <span class="text-sm font-bold text-body">${esc(p.sector)}</span>
            <h3 class="font-display text-3xl leading-none tracking-wide">${esc(p.name)}</h3>
            <p class="text-[15px] leading-relaxed text-body">${esc(p.desc)}</p>
            <div class="mt-auto flex flex-wrap gap-3 pt-3">${links}</div>
          </div>
        </article>`;
    },

    render(filter) {
      const list = SITE.projects.filter((p) => filter === 'all' || p.categories.includes(filter));
      this.$grid.html(list.map((p, i) => this.card(p, i)).join(''));
      $('#projects-count').text(`${list.length} project${list.length === 1 ? '' : 's'}`);
      Reveal.observe(this.$grid.find('.reveal'));
    },
  };

  // ---------- Video player (modal) ----------
  const Player = {
    $modal: null,
    $video: null,
    lastFocus: null,

    init() {
      this.$modal = $('#video-modal');
      this.$video = $('#video-player');
      if (!this.$modal.length) return;

      $(document).on('click', '[data-video]', (e) => {
        const $t = $(e.currentTarget);
        this.open($t.data('video'), $t.data('poster'), $t.data('title'));
      });
      this.$modal.on('click', '[data-close]', () => this.close());
      this.$modal.on('click', (e) => { if (e.target === this.$modal[0]) this.close(); });
      $(document).on('keydown', (e) => { if (e.key === 'Escape' && !this.$modal.hasClass('hidden')) this.close(); });
    },

    open(src, poster, title) {
      this.lastFocus = document.activeElement;
      $('#video-title').text(`${title} — promo video`);
      this.$video.attr({ src, poster: poster || null });
      this.$modal.removeClass('hidden').addClass('flex');
      $('body').css('overflow', 'hidden');
      this.$modal.find('[data-close]').first().trigger('focus');
      const playing = this.$video[0].play();
      if (playing && playing.catch) playing.catch(() => {}); // autoplay blocked → user presses play
    },

    close() {
      const v = this.$video[0];
      v.pause();
      this.$video.removeAttr('src');
      v.load(); // stop downloading
      this.$modal.addClass('hidden').removeClass('flex');
      $('body').css('overflow', '');
      if (this.lastFocus) this.lastFocus.focus();
    },
  };

  // ---------- Scroll reveal ----------
  const Reveal = {
    io: null,
    init() {
      if (!('IntersectionObserver' in window)) { $('.reveal').addClass('is-visible'); return; }
      this.io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { $(en.target).addClass('is-visible'); this.io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      this.observe($('.reveal'));
    },
    observe($els) {
      if (!this.io) { $els.addClass('is-visible'); return; }
      $els.each((_, el) => this.io.observe(el));
    },
  };

  // ---------- Bug fixes ----------
  const FIX_ICONS = {
    payment: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    seo: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M8 11l2 2 4-4"/>',
    tracking: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/>',
    browser: '<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
    security: '<path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/>',
    video: '<rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3z"/>',
  };

  const Fixes = {
    init() {
      const $grid = $('#fixes-grid');
      if (!$grid.length || !SITE.fixes) return;
      $grid.html(SITE.fixes.map((f, i) => this.card(f, i)).join(''));
      Reveal.observe($grid.find('.reveal'));
    },

    card(f, i) {
      const tilt = i % 2 ? 'rotate-1' : '-rotate-1';
      const icon = FIX_ICONS[f.icon] || FIX_ICONS.browser;
      return `
        <li class="reveal panel relative flex ${tilt} flex-col gap-3.5 bg-white p-6">
          <span aria-hidden="true" class="absolute -top-3 right-4 rotate-6 rounded-md border-[3px] border-comic-red bg-white px-2 font-display text-lg tracking-wider text-comic-red">Fixed!</span>
          <span class="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-ink bg-comic-yellow">
            <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
          </span>
          <span class="self-start rounded-full bg-ink px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">${esc(f.client)}</span>
          <h3 class="font-display text-[28px] leading-none tracking-wider">${esc(f.title)}</h3>
          <p class="text-[15px] leading-relaxed text-body">${esc(f.desc)}</p>
        </li>`;
    },
  };

  // ---------- Navigation (mobile menu + active tab) ----------
  const Nav = {
    init() {
      const $btn = $('#menu-toggle');
      const $menu = $('#mobile-menu');

      $btn.on('click', () => {
        const open = $btn.attr('aria-expanded') === 'true';
        $btn.attr('aria-expanded', String(!open));
        $menu.stop(true, true).slideToggle(200);
      });
      $menu.on('click', 'a', () => { $btn.attr('aria-expanded', 'false'); $menu.slideUp(150); });

      // Highlight current section in the mobile tab bar
      const $tabs = $('.tab-link');
      const sections = $tabs.map((_, a) => $(a).attr('href')).get();
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              $tabs.removeClass('is-active').removeAttr('aria-current');
              $tabs.filter(`[href="#${en.target.id}"]`).addClass('is-active').attr('aria-current', 'page');
            }
          });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach((s) => { const el = document.querySelector(s); if (el) io.observe(el); });
      }
    },
  };

  // ---------- Contact links + form ----------
  const Contact = {
    init() {
      const c = SITE.contact;
      $('[data-link="email"]').attr('href', `mailto:${c.email}`);
      $('[data-link="linkedin"]').attr('href', c.linkedin);
      if (c.whatsapp) $('[data-link="whatsapp"]').attr('href', `https://wa.me/${c.whatsapp}`);
      else {
        $('[data-link="whatsapp"]').addClass('hidden');
        $('#form-submit').text('Send request'); // no WhatsApp number → form falls back to email
      }

      const $form = $('#contact-form');
      $form.on('input change', '.field', (e) => $(e.target).removeClass('is-invalid').removeAttr('aria-invalid'));
      $form.on('submit', (e) => {
        e.preventDefault();
        const data = this.read($form);
        if (!this.validate($form, data)) return;
        const via = SITE.contact.whatsapp ? 'whatsapp' : 'email';
        this.send(data, via);
        $('#form-status').text('Opening your ' + (via === 'whatsapp' ? 'WhatsApp' : 'email app') + '… Thanks for reaching out!').removeClass('hidden');
      });
    },

    read($form) {
      return {
        name: $.trim($form.find('[name="name"]').val()),
        email: $.trim($form.find('[name="email"]').val()),
        type: $form.find('[name="type"]:checked').val() || 'Website',
        message: $.trim($form.find('[name="message"]').val()),
      };
    },

    validate($form, d) {
      const errors = [];
      if (d.name.length < 2) errors.push('name');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) errors.push('email');
      if (d.message.length < 10) errors.push('message');
      errors.forEach((n) => $form.find(`[name="${n}"]`).addClass('is-invalid').attr('aria-invalid', 'true'));
      if (errors.length) {
        $form.find(`[name="${errors[0]}"]`).trigger('focus');
        $('#form-status').text('Please fill in your name, a valid email and a short message (10+ characters).').removeClass('hidden');
      }
      return !errors.length;
    },

    send(d, via) {
      const text = [
        'Hi Himanshu 👋',
        '',
        '*New project request*',
        '',
        `*Name:* ${d.name}`,
        `*Email:* ${d.email}`,
        `*Project type:* ${d.type}`,
        '',
        '*Idea:*',
        d.message,
      ].join('\n');
      const url = via === 'whatsapp' && SITE.contact.whatsapp
        ? `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(text)}`
        : `mailto:${SITE.contact.email}?subject=${encodeURIComponent('New project: ' + d.type)}&body=${encodeURIComponent(text)}`;
      window.open(url, via === 'whatsapp' ? '_blank' : '_self');
    },
  };

  // ---------- Boot ----------
  $(function () {
    Reveal.init();
    Projects.init();
    Player.init();
    Fixes.init();
    Nav.init();
    Contact.init();
    $('#year').text(new Date().getFullYear());
  });
})(jQuery, window.SITE);
