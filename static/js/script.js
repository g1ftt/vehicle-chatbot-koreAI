// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const images = ['static/image/1.jpg', 'static/image/2.jpg'];
    let currentIndex = 0;

    // Set initial background image
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundRepeat = 'no-repeat';
    hero.style.backgroundSize = 'cover';

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        hero.style.backgroundImage = `url(${images[currentIndex]})`;
    }, 5000);

    // const ctaButton = document.querySelector('.cta-button');
    
    // ctaButton.addEventListener('click', () => {
    //     alert('Explore Now button clicked!');
    // });
});
