window.addEventListener('load', function() {
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(wrapper => {
        const container = wrapper.querySelector('.carousel-container');
        const prevBtn = wrapper.querySelector('.carousel-btn.prev');
        const nextBtn = wrapper.querySelector('.carousel-btn.next');

        prevBtn.addEventListener('click', () => {
            const itemWidth = container.querySelector('.carousel-item').offsetWidth;
            const gap = parseFloat(getComputedStyle(container).gap);
            container.scrollBy({ left: -(itemWidth + gap), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            const itemWidth = container.querySelector('.carousel-item').offsetWidth;
            const gap = parseFloat(getComputedStyle(container).gap);
            container.scrollBy({ left: (itemWidth + gap), behavior: 'smooth' });
        });
    });
});