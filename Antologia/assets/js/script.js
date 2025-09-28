document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos del DOM ---
    const body = document.body;
    const coverButton = document.getElementById('btn-inicio');
    const bookCover = document.querySelector('.book-cover');
    const mainContent = document.querySelector('.book');
    const allPages = document.querySelectorAll('.page, .indice-container');
    const navLinks = document.querySelectorAll('.indice-link, .nav-link, .book-header a, .book-footer a');

    // --- Lógica de Navegación ---
    let currentPageIndex = 0;

    // Función para mostrar una página específica y ocultar las demás
    function showPage(targetId) {
        if (targetId === '#cover') {
            closeBook();
            return;
        }

        const previousPage = document.querySelector('.page.active, .indice-container.active');
        const newPage = document.querySelector(targetId);

        // Ocultar la página anterior
        if (previousPage && previousPage !== newPage) {
            previousPage.classList.add('hiding');
            previousPage.classList.remove('active');
            // Limpiar la clase de ocultación después de la animación
            previousPage.addEventListener('transitionend', () => {
                previousPage.classList.remove('hiding');
            }, { once: true });
        }

        // Mostrar la nueva página
        if (newPage) {
            newPage.classList.add('active');
        }

        updateURL(targetId);
        updateShareLinks();
    }

    // Función para "abrir el libro"
    function openBook(targetId = '#indice') {
        bookCover.classList.add('fading-out');
        body.classList.add('book-is-open');
        showPage(targetId);
    }

    // Función para "cerrar el libro" y volver a la portada
    function closeBook() {
        bookCover.classList.remove('fading-out');
        body.classList.remove('book-is-open');
        updateURL('#cover'); // Actualiza la URL a la portada
    }

    // --- Lógica para actualizar la URL y los botones de compartir ---
    function updateURL(hash) {
        // Usamos pushState para crear una nueva entrada en el historial del navegador,
        // permitiendo el uso de los botones de atrás/adelante.
        const newUrl = window.location.pathname + (hash === '#cover' ? '' : window.location.search + hash);
        // Evitamos empujar un estado duplicado si la URL ya es la correcta.
        if (window.location.href !== newUrl) {
            history.pushState({ path: newUrl }, '', newUrl);
        }
    }

    const shareX = document.getElementById('share-x');
    const shareFb = document.getElementById('share-fb');

    function updateShareLinks() {
        const currentUrl = window.location.href;
        const activePage = document.querySelector('.page.active');
        let title = "Antología: Del Amor Y Otras Nostalgias";
        if (activePage && activePage.dataset.title) {
            title = `${activePage.dataset.title} - Un poema de la antología de DaniSid`;
        }
        if (shareX) shareX.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
        if (shareFb) shareFb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    }

    // --- Event Listeners ---

    // 1. Botón de la portada para abrir el libro
    coverButton.addEventListener('click', (e) => {
        e.preventDefault();
        openBook('#indice'); // Siempre abre en el índice
    });

    // 2. Todos los enlaces de navegación dentro del libro
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            // Solo hace scroll si el elemento principal existe
            if (mainContent) {
                mainContent.scrollTo({ top: 0, behavior: 'smooth' });
            }
            showPage(targetId);
        });
    });

    // 4. Navegación con flechas del teclado
    document.addEventListener('keydown', (e) => {
        // Solo navegar si el libro está abierto
        if (!body.classList.contains('book-is-open')) {
            return;
        }

        const activePage = document.querySelector('.page.active, .indice-container.active');
        if (!activePage) return;

        if (e.key === 'ArrowRight') {
            const nextButton = activePage.querySelector('.nav-link.next');
            if (nextButton) {
                nextButton.click(); // Simula un clic en el botón "Siguiente"
            }
        } else if (e.key === 'ArrowLeft') {
            const prevButton = activePage.querySelector('.nav-link.prev');
            if (prevButton) {
                prevButton.click(); // Simula un clic en el botón "Anterior"
            }
        }
    });

    // 3. Carga inicial de la página
    function handleInitialLoad() {
        const hash = window.location.hash || '#cover';
        // Reemplazamos el estado inicial para tener una base limpia a la que volver.
        const initialUrl = window.location.pathname + (hash === '#cover' ? '' : hash);
        history.replaceState({ path: initialUrl }, '', initialUrl);

        if (hash === '#cover' || !document.querySelector(hash)) {
            closeBook();
        } else {
            openBook(hash);
            updateShareLinks(); // Aseguramos que los links de compartir estén bien desde el inicio.
        }
    }

    window.addEventListener('popstate', handleInitialLoad); // Para los botones de atrás/adelante del navegador
    handleInitialLoad(); // Ejecutar al cargar la página
});