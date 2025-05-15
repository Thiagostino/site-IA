document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        burger.querySelector('i').classList.toggle('fa-times');
        burger.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            burger.querySelector('i').classList.remove('fa-times');
            burger.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação ao rolar
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.app-card, .tutorial-card, .about-content, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configura animações iniciais
    document.querySelectorAll('.app-card, .tutorial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelector('.about-content').style.opacity = '0';
    document.querySelector('.about-content').style.transform = 'translateY(20px)';
    document.querySelector('.about-content').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    document.querySelector('.contact-container').style.opacity = '0';
    document.querySelector('.contact-container').style.transform = 'translateY(20px)';
    document.querySelector('.contact-container').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Adiciona evento de scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Dispara uma vez para elementos já visíveis
    animateOnScroll();
    
    // Validação do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const name = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');
            
            if (name.value.trim() === '') {
                alert('Por favor, insira seu nome.');
                name.focus();
                return;
            }
            
            if (email.value.trim() === '' || !email.value.includes('@')) {
                alert('Por favor, insira um e-mail válido.');
                email.focus();
                return;
            }
            
            if (message.value.trim() === '') {
                alert('Por favor, insira sua mensagem.');
                message.focus();
                return;
            }
            
            // Simulação de envio
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    // Validação do formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]');
            
            if (email.value.trim() === '' || !email.value.includes('@')) {
                alert('Por favor, insira um e-mail válido.');
                email.focus();
                return;
            }
            
            // Simulação de inscrição
            alert('Obrigado por assinar nossa newsletter!');
            this.reset();
        });
    }
});