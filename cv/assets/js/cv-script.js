document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy load animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Ocultar botones flotantes al llegar al footer
    const footer = document.querySelector('footer');
    const printBtn = document.querySelector('.print-btn');
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const footerPrintBtn = document.getElementById('footer-print-btn');
    const footerWhatsappBtn = document.getElementById('footer-whatsapp-btn');

    if (footer && printBtn && whatsappBtn && footerPrintBtn && footerWhatsappBtn) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Oculta los botones flotantes
                    printBtn.style.transform = 'scale(0)';
                    whatsappBtn.style.transform = 'scale(0)';
                    // Muestra los botones del footer
                    footerPrintBtn.classList.add('visible');
                    footerWhatsappBtn.classList.add('visible');
                } else {
                    // Muestra los botones flotantes
                    printBtn.style.transform = 'scale(1)';
                    whatsappBtn.style.transform = 'scale(1)';
                    // Oculta los botones del footer
                    footerPrintBtn.classList.remove('visible');
                    footerWhatsappBtn.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });

        footerObserver.observe(footer);
    }
});