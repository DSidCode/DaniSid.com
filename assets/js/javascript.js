const   contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message');

const submitForm = (e) =>{
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch(myForm.action, {
        method: "POST",
        headers: { "Accept": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(response => {
        if (response.ok) {
            // Muestra el mensaje de éxito
            contactMessage.textContent = 'Tu mensaje ha sido enviado ✔';
            // Limpia el formulario
            contactForm.reset();
            // Oculta el mensaje después de 5 segundos
            setTimeout(() => { contactMessage.textContent = '' }, 5000);
        } else {
            throw new Error('Error en el envío del formulario.');
        }
    })
    .catch((error) => {
        contactMessage.textContent = 'Mensaje no Enviado (error de servidor) ❌';
        console.error("Error al enviar el formulario: ", error);
    });
}

contactForm.addEventListener('submit', submitForm);

/* =============== SHOW SCROLL UP ============*/
/* =============== SHOW SCROLL UP ============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/* =============== SCROLL SECTION ACTIVE LINK ============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive =() =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav_list a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop +sectionHeight){
                sectionClass.classList.add('active-link')
            }else{
                sectionClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)
/* =============== SCROLL REVEAL ANIMATION ============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 800, // Reducimos la duración a menos de 1 segundo
    delay: 100,    // Reducimos el retraso base
    // reset: true, //repeticin de la animacion
})

sr.reveal(`.hero_data, .contact-form`, {origin: 'top'})
sr.reveal(`.hero_image`, {origin: 'right', delay: 400})
sr.reveal(`.skills_wrapper`, {origin: 'bottom', delay: 500})
sr.reveal(`.projects_card, .services_card, .experience_card, .lab_card`, {interval: 80}) // Intervalo más rápido

// Seleccionar todos los canvases con la clase matrix-effect
const canvases = document.querySelectorAll('.matrix-effect');

// Configuración común
const binary = '01'; // Solo 0 y 1 para simular código binario
const fontSize = 16;

// Función para ajustar el tamaño del canvas al contenedor padre
function resizeCanvas(canvas) {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
}

// Configurar cada canvas
canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    resizeCanvas(canvas);

    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        // Fondo con opacidad baja para efecto de desvanecimiento
        ctx.fillStyle = 'rgba(26, 26, 30, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Fuente para los números binarios
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = binary.charAt(Math.floor(Math.random() * binary.length));
            const glow = Math.random();

            // Efecto de brillo
            if (glow > 0.95) {
                ctx.fillStyle = '#00D4FF'; // Cian brillante
                ctx.globalAlpha = 1;
            } else if (glow > 0.7) {
                ctx.fillStyle = '#00A3CC';
                ctx.globalAlpha = 0.7;
            } else {
                ctx.fillStyle = '#007A99';
                ctx.globalAlpha = 0.4;
            }

            // Dibujar el carácter
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reiniciar la gota cuando llegue al fondo
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        ctx.globalAlpha = 1; // Restaurar opacidad
    }

    // Animación
    setInterval(draw, 35);
});

// Ajustar el tamaño al redimensionar la ventana
window.addEventListener('resize', () => {
    canvases.forEach(canvas => {
        resizeCanvas(canvas);
        const newColumns = Math.floor(canvas.width / fontSize);
        const drops = Array(newColumns).fill(1);
    });
});

/*=============== SKILLS TOGGLE ===============*/
const skillsToggle = document.getElementById('skills-toggle'),
      skillsSecondary = document.getElementById('skills-secondary')

if (skillsToggle) {
    skillsToggle.addEventListener('click', () => {
        // Add the show-skills class to the div tag with the skills_secondary class
        skillsSecondary.classList.toggle('show-skills')

        // Change icon
        const icon = skillsToggle.querySelector('i');
        if (icon.classList.contains('ri-add-line')) {
            icon.classList.remove('ri-add-line');
            icon.classList.add('ri-subtract-line');
            skillsToggle.title = "Ver menos habilidades";
        } else {
            icon.classList.remove('ri-subtract-line');
            icon.classList.add('ri-add-line');
            skillsToggle.title = "Ver más habilidades";
        }
    })
}