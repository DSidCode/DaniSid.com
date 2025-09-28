document.addEventListener('DOMContentLoaded', () => {
    const completeButtons = document.querySelectorAll('.complete-btn');
    const resetButton = document.getElementById('reset-progress-btn');
    const missions = document.querySelectorAll('[data-mission-id]');
    const progressBar = document.getElementById('progress-bar-fill');
    const progressText = document.getElementById('progress-text');

    // Función para actualizar la barra de progreso
    const updateProgress = () => {
        const completedMissions = document.querySelectorAll('.completed[data-mission-id]').length;
        const totalMissions = missions.length;
        const percentage = totalMissions > 0 ? (completedMissions / totalMissions) * 100 : 0;

        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
            // Añadimos el porcentaje dentro de la barra
            progressBar.textContent = `${Math.round(percentage)}%`;
        }
        if (progressText) {
            progressText.textContent = `¡Tu Avance: ${completedMissions} de ${totalMissions} completadas!`;
        }
    };

    // Función para guardar el estado de una misión
    const saveProgress = (missionId) => {
        let completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
        if (!completed.includes(missionId)) {
            completed.push(missionId);
            localStorage.setItem('completedMissions', JSON.stringify(completed));
        }
    };

    // Función para cargar el progreso guardado
    const loadProgress = () => {
        const completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
        completed.forEach(missionId => {
            const missionDetail = document.querySelector(`[data-mission-id="${missionId}"]`);
            if (missionDetail) {
                missionDetail.classList.add('completed');
                const button = missionDetail.querySelector('.complete-btn');
                button.textContent = '¡Misión Cumplida! 🎉';
                button.disabled = true;
            }
        });
        updateProgress();
    };

    // Añadir evento a cada botón de completar
    completeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const missionDetail = button.closest('[data-mission-id]');
            const missionId = missionDetail.getAttribute('data-mission-id');

            missionDetail.classList.add('completed');
            button.textContent = '¡Misión Cumplida! 🎉';
            button.disabled = true;

            // ¡Lanzar confeti!
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });

            saveProgress(missionId);
            updateProgress();
        });
    });

    // Añadir evento al botón de reiniciar
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            // Pedir confirmación antes de borrar
            const isConfirmed = window.confirm('¿Estás seguro, explorador? ¡Esto borrará todo tu progreso y empezarás de cero!');
            if (isConfirmed) {
                localStorage.removeItem('completedMissions');
                window.location.reload(); // Recargar la página para reiniciar el estado
            }
        });
    }

    // Cargar el progreso al iniciar la página
    loadProgress();

    // --- Lógica para ocultar flotantes al llegar al footer ---
    const footer = document.querySelector('.footer');
    const floatingElements = document.querySelectorAll('.progress-widget, .floating-yt-btn');
    const footerYtBtn = document.querySelector('.footer-yt-btn');

    if (footer && floatingElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                floatingElements.forEach(el => {
                    if (entry.isIntersecting) {
                        el.classList.add('hidden-by-footer');
                        if(footerYtBtn) footerYtBtn.classList.add('visible');
                    } else {
                        el.classList.remove('hidden-by-footer');
                        if(footerYtBtn) footerYtBtn.classList.remove('visible');
                    }
                });
            });
        }, { threshold: 0.1 }); // Se activa cuando el 10% del footer es visible

        observer.observe(footer);
    }
});