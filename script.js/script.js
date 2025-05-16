// Inicializações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação no hero
    const typed = new Typed('.typing', {
        strings: ['Inteligência Artificial', 'Machine Learning', 'Deep Learning', 'Inovação'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Partículas no background
    particlesJS('particles-js', {
        // Configurações das partículas
    });

    // Efeito de cursor personalizado
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Outras interações continuam...
});
