document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mouse glow effect
    const glow = document.querySelector('.mouse-glow');
    
    function updateGlowPosition(e) {
        if (e.type === 'touchmove' && e.touches.length > 0) {
            glow.style.transform = `translate(${e.touches[0].clientX}px, ${e.touches[0].clientY}px) translate(-50%, -50%)`;
        } else {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
    }

    window.addEventListener('mousemove', updateGlowPosition);
    window.addEventListener('touchmove', updateGlowPosition);

    // Smooth initial appearance
    setTimeout(() => {
        glow.style.opacity = '1';
    }, 500);
});