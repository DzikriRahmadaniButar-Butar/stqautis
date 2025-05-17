document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.slide-btn');
    const slider = document.getElementById('slider');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('opacity-0', 'hidden');
          slide.classList.add('opacity-100');
        } else {
          slide.classList.remove('opacity-100');
          slide.classList.add('opacity-0');
        }
      });

      buttons.forEach((btn, i) => {
        btn.classList.toggle('bg-blue-500', i === index);
        btn.classList.toggle('bg-gray-400', i !== index);
      });
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        currentIndex = parseInt(button.dataset.slide);
        showSlide(currentIndex);
      });
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);

    showSlide(currentIndex);

    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }
      if (touchEndX > touchStartX + 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }
    }

    if (slider) {
      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });

      // Drag for desktop
      let isDragging = false;
      let startX = 0;
      let endX = 0;

      slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
      });

      slider.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        endX = e.clientX;
        if (endX < startX - 50) {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
        } else if (endX > startX + 50) {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
        }
      });

      // Prevent image dragging default
      slider.addEventListener('dragstart', (e) => e.preventDefault());
    }

    // === Hamburger Menu ===
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });

    // === Navbar Fixed ===
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const fixNav = header.offsetTop;

        if (window.pageYOffset > fixNav) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
    });
});
