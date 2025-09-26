document.addEventListener('DOMContentLoaded', () => {
    const pages = Array.from(document.querySelectorAll('.page, .indice-container')); // Total: 10 páginas (índice + 9 secciones)
    const shareX = document.getElementById('share-x');
    const shareFb = document.getElementById('share-fb');
    const btnInicio = document.getElementById('btn-inicio');
    const contactForm = document.getElementById('contact-form-antologia');
    const contactMessage = document.getElementById('contact-message-antologia');
    
    // Pre-calcula las páginas del libro y su total para mayor eficiencia.
    const bookContentPages = pages.filter(p => p.classList.contains('page') && !['bio', 'apoyo'].includes(p.id));
    const totalBookPages = bookContentPages.length;
    // Almacena el índice de la página en el propio elemento para evitar búsquedas posteriores.
    bookContentPages.forEach((page, index) => {
        page.dataset.bookPageIndex = index;
    });

    let currentPageIndex = 0;
    
    function preloadNextPage() {
        const nextIndex = (currentPageIndex + 1) % pages.length;
        if (nextIndex >= 0 && nextIndex < pages.length) {
            setTimeout(() => {
                console.log('Página precargada:', pages[nextIndex].dataset.title);
            }, 500);
        }
    }

    function showPage(index) {
        if (index < 0) index = 0;
        if (index >= pages.length) index = pages.length - 1;

        currentPageIndex = index;
        pages.forEach(p => p.classList.remove('active'));
        pages[currentPageIndex].classList.add('active');
        
        const currentId = pages[currentPageIndex].id;
        history.replaceState(null, '', `#${currentId}`);
        updateShareLinks();
        updatePageCounter();
        preloadNextPage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function showIndice() {
        showPage(0); // El índice es ahora la primera página (index 0)
    }
    
    function updatePageCounter() {
        // Busca el contador solo dentro de la página activa actualmente.
        const activePage = pages[currentPageIndex];
        const counter = activePage.querySelector('.page-counter');
        
        if (counter) {
            // Accede directamente al índice pre-calculado desde el dataset del elemento.
            const bookPageIndex = activePage.dataset.bookPageIndex;
            if (bookPageIndex !== undefined) {
                counter.textContent = `Página ${parseInt(bookPageIndex) + 1} de ${totalBookPages}`;
            }
        }
    }

    function updateShareLinks() {
        const activePage = document.querySelector('.page.active');
        if (!activePage) return;
        
        const title = activePage.dataset.title || document.title;
        const url = window.location.href.split('#')[0] + '#' + activePage.id;
        
        if (shareX) {
            shareX.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        }
        if (shareFb) {
            shareFb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        }
    }

    function setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetIndex = e.target.closest('.nav-link').dataset.next;
                if (targetIndex) {
                    showPage(parseInt(targetIndex));
                } else {
                    const prevIndex = e.target.closest('.nav-link').dataset.prev;
                    showPage(parseInt(prevIndex));
                }
            });
        });
        
        document.querySelectorAll('.indice-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetIndex = parseInt(link.dataset.target);
                showPage(targetIndex);
            });
        });
        
        document.querySelectorAll('.pill').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetPage = pages.find(p => p.id === targetId);
                if (targetPage) {
                    showPage(pages.indexOf(targetPage));
                }
            });
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                showPage(currentPageIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showPage(currentPageIndex + 1);
            } else if (e.key === 'Home') {
                showPage(0);
            } else if (e.key === 'End') {
                showPage(pages.length - 1);
            } else if (e.key === 'Escape') {
                showPage(0);
            }
        });
    }

    function setupContactForm() {
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactMessage.textContent = 'Enviando...';

            // Reemplaza con tus IDs de EmailJS
            const serviceID = 'TU_SERVICE_ID';
            const templateID = 'TU_TEMPLATE_ID';
            const publicKey = 'TU_PUBLIC_KEY';

            emailjs.sendForm(serviceID, templateID, contactForm, publicKey)
                .then(() => {
                    contactMessage.textContent = '✅ ¡Mensaje enviado con éxito!';
                    contactMessage.style.color = 'green';
                    contactForm.reset();
                }, (error) => {
                    contactMessage.textContent = `❌ Error al enviar: ${error.text}`;
                    contactMessage.style.color = 'red';
                });
        });
    }

    // Inicializar
    const initialHash = window.location.hash;
    let initialIndex = 0;
    
    if (initialHash) {
        const targetPage = pages.find(p => `#${p.id}` === initialHash);
        if (targetPage) {
            initialIndex = pages.indexOf(targetPage);
        }
    }
    showPage(initialIndex);
    
    setupNavigation();
    setupContactForm();
    
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('tabindex', '0');
    });
});