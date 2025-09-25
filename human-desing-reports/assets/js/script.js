document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('hd-report-form');
    const contactMessage = document.getElementById('contact-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactMessage.textContent = 'Enviando solicitud...';
            contactMessage.style.color = 'hsl(200, 10%, 40%)';

            // Reemplaza con tus IDs de EmailJS
            // IMPORTANTE: Crea una nueva plantilla en EmailJS para este formulario
            // que incluya los nuevos campos (fecha, hora y lugar de nacimiento).
            const serviceID = 'service_gi6v0na'; // Tu Service ID
            const templateID = 'template_dpmqc3m';
            const publicKey = 'sYgC-7nYnvQHkfqRJ'; // Tu Public Key

            emailjs.sendForm(serviceID, templateID, contactForm, publicKey)
                .then(() => {
                    contactMessage.textContent = '✅ ¡Solicitud enviada con éxito! Me pondré en contacto contigo pronto.';
                    contactMessage.style.color = 'green';
                    contactForm.reset();
                }, (error) => {
                    contactMessage.textContent = `❌ Error al enviar: ${error.text}. Por favor, inténtalo de nuevo.`;
                    contactMessage.style.color = 'red';
                });
        });
    }
});


