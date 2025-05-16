// Menu mobile
document.getElementById('menu-btn').addEventListener('click', function() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
