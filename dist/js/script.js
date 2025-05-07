document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.slide-btn');
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

    // Hamburger menu
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });

    // Navbar fixed
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
