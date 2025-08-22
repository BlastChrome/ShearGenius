// ===== FOOTER YEAR UPDATER =====
// Automatically updates the footer year to the current year

(function () {
  "use strict";

  function updateFooterYear() {
    try {
      // Get the current year
      const currentYear = new Date().getFullYear();

      // Find all footer year elements
      const footerYearElements = document.querySelectorAll(".footer-ak");

      if (footerYearElements.length === 0) {
        console.log('Footer year updater: No footer elements found with class "footer-ak"');
        return;
      }

      // Update each footer year element
      footerYearElements.forEach(function (element, index) {
        const originalText = element.textContent;
        // Replace the hardcoded year with the current year
        const updatedText = originalText.replace(/\d{4}/, currentYear);

        if (originalText !== updatedText) {
          element.textContent = updatedText;
          console.log(`Footer year updater: Updated footer ${index + 1} from "${originalText}" to "${updatedText}"`);
        } else {
          console.log(`Footer year updater: Footer ${index + 1} already up to date`);
        }
      });

      console.log(`Footer year updater: Successfully processed ${footerYearElements.length} footer elements`);
    } catch (error) {
      console.error("Footer year updater error:", error);
    }
  }

  // Update when DOM is ready
  if (document.readyState === "loading") {
    // DOM is still loading, wait for DOMContentLoaded
    document.addEventListener("DOMContentLoaded", updateFooterYear);
  } else {
    // DOM is already loaded, run immediately
    updateFooterYear();
  }

  // Also update on window load to catch any dynamically added content
  window.addEventListener("load", updateFooterYear);
})();
