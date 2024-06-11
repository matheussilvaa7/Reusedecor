document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.product');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    function updateCarousel() {
        const width = carouselSlides[0].clientWidth;
        carouselContainer.style.transform = `translateX(${-width * currentIndex}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselSlides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselSlides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});
