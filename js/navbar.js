document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const mobileNavBtn = document.getElementsByClassName("mobile-nav-btn")[0];
  const mobileNavContainer = document.getElementsByClassName("mobile-nav-container")[0];
  const mobileNavElements = [document.getElementsByClassName("mb-navbar")[0], document.getElementsByClassName("mb-social-links")[0], document.getElementsByClassName("mb-nav-btn")[0]];

  let isMenuOpen = false;
  const header = document.getElementsByClassName("header")[0];
  let headerOffsetTop = header.offsetTop;

  // Function to disable scrolling
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  }

  // Function to enable scrolling
  function enableScroll() {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  }

  // Mobile navigation toggle
  mobileNavBtn.addEventListener("click", function () {
    mobileNavBtn.classList.toggle("change");

    if (isMenuOpen) {
      // Close menu
      isMenuOpen = false;
      mobileNavContainer.classList.remove("active");
      mobileNavContainer.classList.add("d-none");

      mobileNavElements.forEach(element => {
        element.classList.remove("animate");
        element.classList.add("animate-out");
      });

      // Re-enable scrolling
      enableScroll();
    } else {
      // Open menu
      isMenuOpen = true;
      mobileNavContainer.classList.add("active");
      mobileNavContainer.classList.remove("d-none");

      mobileNavElements.forEach(element => {
        element.classList.add("animate");
        element.classList.remove("animate-out");
      });

      // Disable scrolling
      disableScroll();
    }
  });

  // Header opacity on scroll
  window.onscroll = function () {
    if (window.pageYOffset > headerOffsetTop) {
      header.classList.remove("opacity-on");
      header.classList.add("opacity-off");
    } else if (window.pageYOffset === 0) {
      header.classList.add("opacity-on");
      header.classList.remove("opacity-off");
    }
  };
});
