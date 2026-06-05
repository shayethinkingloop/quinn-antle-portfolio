/* ============================================================
   GALLERY RENDERER
   Reads from SITE_CONFIG (config.js) and builds the gallery grid.
   
   This file does not need to be edited.
   All content changes go in config.js.
   ============================================================ */

/* --- Populate sidebar identity and CTA from config --- */
function initSidebar() {
  document.querySelectorAll(".sidebar-name").forEach(el => {
    el.textContent = SITE_CONFIG.artistName;
  });
  document.querySelectorAll(".sidebar-birth").forEach(el => {
    el.textContent = SITE_CONFIG.birthYear;
  });

  const ctaLinks = document.querySelectorAll(".btn-cta");
  ctaLinks.forEach(el => {
    el.textContent = SITE_CONFIG.ctaText;
    el.href = "mailto:" + SITE_CONFIG.ctaEmail;
  });

  // Mark the active nav link based on current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar-nav a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

/* --- Build an artwork card element --- */
function createArtworkItem(work, folder) {
  const item = document.createElement("div");
  item.className = "artwork-item";

  const img = document.createElement("img");
  img.src = "images/" + folder + "/" + work.file;
  img.alt = work.title;
  img.loading = "lazy";
  // Graceful fallback: show placeholder background if image is missing
  img.onerror = function() {
    const placeholder = document.createElement("div");
    placeholder.className = "img-placeholder";
    item.replaceChild(placeholder, img);
  };

  const caption = document.createElement("div");
  caption.className = "artwork-caption";

  const title = document.createElement("span");
  title.className = "artwork-title";
  title.textContent = work.title;

  const size = document.createElement("span");
  size.className = "artwork-size";
  size.textContent = work.size;

  caption.appendChild(title);
  caption.appendChild(size);
  item.appendChild(img);
  item.appendChild(caption);

  return item;
}

/* --- Render home gallery: interleaved drawing, painting, drawing, painting... --- */
function renderHomeGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const drawings  = SITE_CONFIG.drawings;
  const paintings = SITE_CONFIG.paintings;
  const count = Math.max(drawings.length, paintings.length);

  for (let i = 0; i < count; i++) {
    if (drawings[i])  container.appendChild(createArtworkItem(drawings[i],  "drawings"));
    if (paintings[i]) container.appendChild(createArtworkItem(paintings[i], "paintings"));
  }
}

/* --- Render a single-category gallery --- */
function renderGallery(containerId, works, folder) {
  const container = document.getElementById(containerId);
  if (!container) return;

  works.forEach(work => {
    container.appendChild(createArtworkItem(work, folder));
  });
}

/* --- Render text page content (CV / Bio / Contact) --- */
function renderTextPage(containerId, text) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.textContent = text;
}

/* --- Mobile nav toggle --- */
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const dropdown  = document.querySelector(".mobile-nav-dropdown");
  if (!hamburger || !dropdown) return;

  hamburger.addEventListener("click", function() {
    const isOpen = dropdown.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", isOpen);
    // Prevent body scroll while nav is open
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.classList.toggle("nav-open", isOpen);
    updateContentOffset();
  });

  // Close nav when a link is tapped
  dropdown.querySelectorAll( "a").forEach(function(link) {
    link.addEventListener("click", function() {
      dropdown.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });
}

/* --- Populate mobile header identity from config --- */
function initMobileHeader() {
  const mobileName = document.querySelector(".mobile-name");
  const mobileBirth = document.querySelector(".mobile-birth");
  if (mobileName) mobileName.textContent = SITE_CONFIG.artistName;
  if (mobileBirth) mobileBirth.textContent = SITE_CONFIG.birthYear;

  // Mark active link in mobile nav too
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".mobile-nav-dropdown a").forEach(function(link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Set mobile CTA
  const mobileCta = document.querySelector(".mobile-cta .btn-cta");
  if (mobileCta) {
    mobileCta.textContent = SITE_CONFIG.ctaText;
    mobileCta.href = "mailto:" + SITE_CONFIG.ctaEmail;
  }
}

/* --- Init on DOM ready --- */
function updateContentOffset() {
  const pageHeader = document.querySelector(".mobile-page-header");
  const mainContent = document.querySelector(".main-content");
  if (!pageHeader || !mainContent) return;
  if (window.innerWidth > 768) return;
  mainContent.style.paddingTop = (48 + pageHeader.offsetHeight + 24) + "px";
}

document.addEventListener("DOMContentLoaded", function() {
  initSidebar();
  initMobileHeader();
  initMobileNav();
  updateContentOffset();
});

window.addEventListener("resize", updateContentOffset);