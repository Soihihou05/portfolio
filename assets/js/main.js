(function () {
  "use strict";

  // Mobile nav toggle
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active nav link on scroll
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    navLinks.forEach(function (link) {
      byId[link.getAttribute("href").replace("#", "")] = link;
    });
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("active"); });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { navObserver.observe(section); });
  }

  // Scroll reveal
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (revealEls.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Hero photo graceful fallback
  var heroPhoto = document.querySelector(".hero-photo");
  var heroImg = heroPhoto ? heroPhoto.querySelector("img") : null;
  if (heroPhoto && heroImg) {
    heroImg.addEventListener("load", function () {
      heroPhoto.classList.add("has-photo");
    });
    heroImg.addEventListener("error", function () {
      heroPhoto.classList.remove("has-photo");
    });
    if (heroImg.complete && heroImg.naturalWidth > 0) {
      heroPhoto.classList.add("has-photo");
    }
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
