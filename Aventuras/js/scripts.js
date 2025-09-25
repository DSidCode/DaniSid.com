document.addEventListener('DOMContentLoaded', () => {
    const storageKey = 'adrianMissionsProgress';
    const allMissions = document.querySelectorAll('details[data-mission-id]');
    const resetButton = document.getElementById('reset-progress-btn');
    const missionsContainer = document.querySelector('main'); // Asumiendo que las misiones están en <main>

    // --- Funciones de Ayuda para localStorage ---
    const getProgress = () => JSON.parse(localStorage.getItem(storageKey)) || {};
    const saveProgress = (progress) => localStorage.setItem(storageKey, JSON.stringify(progress));

    // --- Funciones para manipular la UI ---

    /**
     * Actualiza la apariencia de una misión según su estado (completada o no).
     * @param {HTMLElement} missionElement - El elemento <details> de la misión.
     * @param {boolean} isCompleted - True si la misión está completada.
     */
    function updateMissionUI(missionElement, isCompleted) {
        const button = missionElement.querySelector('.complete-btn');
        missionElement.classList.toggle('completed', isCompleted);
        if (button) { // Asegurarse de que el botón existe
            button.textContent = isCompleted ? '¡Misión Lograda! 🎉' : 'Marcar como Misión Cumplida';
            button.disabled = isCompleted;
        }
    }

    // --- Lógica Principal ---

    // 1. Cargar el estado inicial al cargar la página
    function loadInitialState() {
        const savedProgress = getProgress();
        allMissions.forEach(mission => {
            const missionId = mission.dataset.missionId;
            updateMissionUI(mission, savedProgress[missionId]);
        });
    }

    // 2. Manejar clics en los botones de completar misión (Delegación de eventos)
    if (missionsContainer) {
        missionsContainer.addEventListener('click', (event) => {
            const button = event.target.closest('.complete-btn');
            if (!button) return; // Si el clic no fue en un botón, no hacer nada

            const missionElement = button.closest('details[data-mission-id]');
            const missionId = missionElement?.dataset.missionId;

            if (missionId && !button.disabled) {
                // ¡Lanzar confeti para celebrar!
                confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });

                // Actualizar la UI
                updateMissionUI(missionElement, true);

                // Guardar en localStorage
                const currentProgress = getProgress();
                currentProgress[missionId] = true;
                saveProgress(currentProgress);
            }
        });
    }

    // 3. Manejar clic en el botón de reiniciar
    function handleReset() {
        if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso? Las misiones volverán a estar sin completar.')) {
            localStorage.removeItem(storageKey);
            allMissions.forEach(mission => {
                updateMissionUI(mission, false);
            });
        }
    }

    // --- Inicialización ---

    loadInitialState();
    if (resetButton) {
        resetButton.addEventListener('click', handleReset);
    }
});