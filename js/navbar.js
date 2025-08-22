// ===== NAVIGATION FUNCTIONALITY =====

// Mobile Navigation Toggle
function toggleMobileNav() {
  const mobileNavContainer = document.querySelector(".mobile-nav-container");
  const mobileNavBtn = document.querySelector(".mobile-nav-btn");

  if (mobileNavContainer && mobileNavBtn) {
    mobileNavContainer.classList.toggle("active");
    mobileNavBtn.classList.toggle("change");

    // Toggle scroll when mobile nav is open
    if (mobileNavContainer.classList.contains("active")) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
}

// Disable page scrolling
function disableScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}

// Enable page scrolling
function enableScroll() {
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.width = "";
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  const mbNavLinks = document.querySelectorAll(".mb-nav-link");

  // Remove active class from all links first
  navLinks.forEach(link => link.classList.remove("active"));
  mbNavLinks.forEach(link => link.classList.remove("active"));

  // Find and activate the current page link
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    // Skip external links (like Booksy)
    if (href && href.startsWith("http")) {
      return;
    }
    if (href && currentPath.includes(href.replace("/", ""))) {
      link.classList.add("active");
    }
  });

  mbNavLinks.forEach(link => {
    const href = link.getAttribute("href");
    // Skip external links (like Booksy)
    if (href && href.startsWith("http")) {
      return;
    }
    if (href && currentPath.includes(href.replace("/", ""))) {
      link.classList.add("active");
    }
  });

  // Special case for home page
  if (currentPath === "/" || currentPath === "/index.html") {
    const homeLinks = document.querySelectorAll('a[href="/index.html"], a[href="/"]');
    homeLinks.forEach(link => {
      const navLink = link.closest(".nav-link") || link.closest(".mb-nav-link");
      if (navLink) {
        navLink.classList.add("active");
      }
    });
  }
}

// Header opacity on scroll
function handleHeaderOpacity() {
  const header = document.querySelector(".header");
  if (header) {
    if (window.pageYOffset > 50) {
      header.classList.add("opacity-on");
      header.classList.remove("opacity-off");
    } else {
      header.classList.add("opacity-off");
      header.classList.remove("opacity-on");
    }
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Set active navigation link
  setActiveNavLink();

  // Mobile navigation toggle
  const mobileNavBtn = document.querySelector(".mobile-nav-btn");
  if (mobileNavBtn) {
    mobileNavBtn.addEventListener("click", toggleMobileNav);
  }

  // Close mobile nav when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mb-nav-link");
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", function () {
      const href = link.getAttribute("href");
      // Don't close mobile menu for external links (they open in new tab)
      if (href && href.startsWith("http")) {
        return;
      }

      const mobileNavContainer = document.querySelector(".mobile-nav-container");
      const mobileNavBtn = document.querySelector(".mobile-nav-btn");
      if (mobileNavContainer && mobileNavBtn) {
        mobileNavContainer.classList.remove("active");
        mobileNavBtn.classList.remove("change");
        enableScroll();
      }
    });
  });

  // Header opacity on scroll
  window.addEventListener("scroll", handleHeaderOpacity);

  // Initial header opacity check
  handleHeaderOpacity();
});
