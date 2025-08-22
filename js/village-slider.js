/**
 * Village Slider Controller
 * Handles the fading slider functionality for the "It Takes a Village" section
 */
class VillageSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = [];
    this.dots = [];
    this.prevBtn = null;
    this.nextBtn = null;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 seconds
    this.isTransitioning = false; // Prevent rapid transitions

    this.init();
  }

  init() {
    // Get all slider elements
    this.slides = document.querySelectorAll(".slide");
    this.dots = document.querySelectorAll(".dot");
    this.prevBtn = document.querySelector(".slider-prev");
    this.nextBtn = document.querySelector(".slider-next");

    if (this.slides.length === 0) return;

    // Initialize slides - set first slide as active, others as hidden
    this.slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add("active");
        slide.style.opacity = "1";
      } else {
        slide.classList.remove("active");
        slide.style.opacity = "0";
      }
    });

    // Add event listeners
    this.addEventListeners();

    // Start auto-play
    this.startAutoPlay();
  }

  addEventListeners() {
    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.goToSlide(index);
      });
    });

    // Arrow navigation
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.previousSlide();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.nextSlide();
      });
    }

    // Keyboard navigation
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") {
        this.previousSlide();
      } else if (e.key === "ArrowRight") {
        this.nextSlide();
      }
    });

    // Touch/swipe support for mobile
    this.addTouchSupport();
  }

  addTouchSupport() {
    let startX = 0;
    let endX = 0;
    const sliderContainer = document.querySelector(".slider-container");

    if (!sliderContainer) return;

    sliderContainer.addEventListener(
      "touchstart",
      e => {
        startX = e.touches[0].clientX;
      },
      { passive: true }
    );

    sliderContainer.addEventListener(
      "touchend",
      e => {
        endX = e.changedTouches[0].clientX;
        this.handleSwipe(startX, endX);
      },
      { passive: true }
    );
  }

  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        this.nextSlide();
      } else {
        // Swipe right - previous slide
        this.previousSlide();
      }
    }
  }

  showSlide(index) {
    if (index === this.currentSlide || this.isTransitioning) return;

    this.isTransitioning = true;

    const currentSlide = this.slides[this.currentSlide];
    const nextSlide = this.slides[index];

    if (!currentSlide || !nextSlide) return;

    // Start crossfade transition
    this.startCrossfade(currentSlide, nextSlide);

    // Update current slide index
    this.currentSlide = index;

    // Update dots
    this.updateDots(index);
  }

  startCrossfade(currentSlide, nextSlide) {
    // Add fade-out class to current slide
    currentSlide.classList.add("fade-out");
    currentSlide.classList.remove("active");

    // Add fade-in class to next slide
    nextSlide.classList.add("fade-in");
    nextSlide.classList.remove("fade-out");

    // After transition completes, clean up classes
    setTimeout(() => {
      // Remove all transition classes
      currentSlide.classList.remove("fade-out");
      nextSlide.classList.remove("fade-in");

      // Set final state
      currentSlide.style.opacity = "0";
      nextSlide.style.opacity = "1";
      nextSlide.classList.add("active");
      this.isTransitioning = false; // Reset transition guard
    }, 800); // Match CSS transition duration
  }

  updateDots(index) {
    // Remove active class from all dots
    this.dots.forEach(dot => {
      dot.classList.remove("active");
    });

    // Activate current dot
    if (this.dots[index]) {
      this.dots[index].classList.add("active");
    }
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.goToSlide(prevIndex);
  }

  goToSlide(index) {
    if (index < 0 || index >= this.slides.length) return;

    this.showSlide(index);
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  // Public method to pause auto-play on hover (optional)
  pauseOnHover() {
    const sliderContainer = document.querySelector(".slider-container");
    if (!sliderContainer) return;

    sliderContainer.addEventListener("mouseenter", () => {
      this.stopAutoPlay();
    });

    sliderContainer.addEventListener("mouseleave", () => {
      this.startAutoPlay();
    });
  }
}

// Initialize slider when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new VillageSlider();
});
