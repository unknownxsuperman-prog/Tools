/**
 * app.js
 * Renders resource + video cards from the data files and wires up
 * the mobile menu, resource search/filter, and scroll-reveal.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- Mobile menu ---------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------- Resource card template ---------------- */
  function resourceCardHTML(r) {
    const cat = RESOURCE_CATEGORIES[r.category];
    return `
      <article class="resource-card" data-category="${r.category}" data-title="${r.title.toLowerCase()}">
        <div class="res-icon" style="background:${cat.accent}22;">${cat.icon}</div>
        <h3 class="res-title">${r.title}</h3>
        <p class="res-desc">${r.description}</p>
        <div class="res-meta">
          <span class="res-cat" style="color:${cat.accent}">${cat.label}</span>
          <a class="btn btn-ghost btn-sm" href="${r.url}">View</a>
        </div>
      </article>`;
  }

  /* ---------------- Featured resources ---------------- */
  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) {
    featuredGrid.innerHTML = RESOURCES.filter((r) => r.featured)
      .map(resourceCardHTML)
      .join("");
  }

  /* ---------------- Resource hub: full grid + search/filter ---------------- */
  const hubGrid = document.getElementById("hub-grid");
  const searchInput = document.getElementById("resource-search");
  const filterChips = document.querySelectorAll(".filter-chip");
  const emptyState = document.getElementById("empty-state");
  let activeCategory = "all";

  function renderHub() {
    if (!hubGrid) return;
    const query = (searchInput?.value || "").trim().toLowerCase();
    const filtered = RESOURCES.filter((r) => {
      const matchesCategory = activeCategory === "all" || r.category === activeCategory;
      const matchesQuery =
        !query || r.title.toLowerCase().includes(query) || r.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    hubGrid.innerHTML = filtered.map(resourceCardHTML).join("");
    if (emptyState) emptyState.classList.toggle("show", filtered.length === 0);
  }

  if (hubGrid) {
    renderHub();
    searchInput?.addEventListener("input", renderHub);
    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        filterChips.forEach((c) => c.setAttribute("aria-pressed", "false"));
        chip.setAttribute("aria-pressed", "true");
        activeCategory = chip.dataset.category;
        renderHub();
      });
    });
  }

  /* ---------------- Latest content (videos) ---------------- */
  const contentGrid = document.getElementById("content-grid");
  if (contentGrid && typeof GITHUB_VIDEOS !== "undefined") {
    contentGrid.innerHTML = GITHUB_VIDEOS.map(
      (v) => `
      <article class="content-card">
        <a class="content-thumb" href="${v.videoUrl}" aria-label="Open ${v.title}">
          <img src="${v.thumbnail}" alt="${v.title} thumbnail" loading="lazy" />
          <span class="platform-badge">${v.platform}</span>
        </a>
        <div class="content-body">
          <h3>${v.title}</h3>
          <p>${v.description}</p>
          <div class="content-foot">
            <span class="content-date">${v.date}</span>
            <a class="btn btn-ghost btn-sm" href="${v.videoUrl}">Watch</a>
          </div>
        </div>
      </article>`
    ).join("");
  }

  /* ---------------- Contact form (front-end only placeholder) ---------------- */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note");
      if (note) note.textContent = "This form isn't connected to anything yet — wire it up to your email or a form service.";
    });
  }

  /* ---------------- Scroll reveal (one pass, no per-card stagger spam) ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }
});
