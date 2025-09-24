/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.cyber-preloader');
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 1000);
    });

    // Cyber toggle
    const toggle = document.querySelector('.cyber-toggle');
    const nav = document.querySelector('.cyber-nav');
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.textContent = nav.classList.contains('active') ? '▽' : '▷';
    });

    // Smooth scroll
    const navLinks = document.querySelectorAll('.cyber-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            const headerHeight = document.querySelector('.cyber-header').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
            nav.classList.remove('active');
            toggle.textContent = '▷';
        });
    });

    // Stats animation
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-value');
        stats.forEach(stat => {
            const endValue = parseInt(stat.dataset.count);
            let startValue = 0;
            const duration = 3000;
            const stepTime = Math.abs(Math.floor(duration / endValue));
            const counter = setInterval(() => {
                startValue += 1;
                stat.textContent = startValue;
                if (startValue >= endValue) clearInterval(counter);
            }, stepTime);
        });
    };

    // Tools animation
    const animateTools = () => {
        const tools = document.querySelectorAll('.tool-unit');
        tools.forEach((tool, index) => {
            setTimeout(() => {
                tool.style.opacity = '1';
                tool.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.id === 'data') animateStats();
                if (entry.target.id === 'tools') animateTools();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.cyber-item').forEach(item => observer.observe(item));

    // Grid filter
    const filterButtons = document.querySelectorAll('.grid-controls button');
    const modules = document.querySelectorAll('.module');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            modules.forEach(module => {
                module.style.opacity = '0';
                module.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    module.style.display = filter === 'all' || module.dataset.type === filter ? 'block' : 'none';
                    if (module.style.display !== 'none') {
                        module.style.opacity = '1';
                        module.style.transform = 'translateY(0)';
                    }
                }, 400);
            });
        });
    });

    // Form transmission
    const form = document.getElementById('cyber-link');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.cyber-btn');
        submitBtn.textContent = 'Transmitiendo...';
        submitBtn.disabled = true;
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            form.reset();
            submitBtn.textContent = 'Enviar Transmisión';
            submitBtn.disabled = false;
            alert('Transmisión exitosa :: Paquete recibido en el núcleo');
        } catch (error) {
            submitBtn.textContent = 'Enviar Transmisión';
            submitBtn.disabled = false;
            alert('Fallo en la transmisión :: Revisa los protocolos');
        }
    });

    // Core visuals parallax
    window.addEventListener('scroll', () => {
        const coreVisuals = document.querySelector('.core-visuals');
        const scrollPos = window.scrollY;
        coreVisuals.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });

    // Cyber trail
    const trail = document.createElement('div');
    trail.className = 'cyber-trail';
    document.body.appendChild(trail);
    document.addEventListener('mousemove', (e) => {
        trail.style.left = `${e.pageX}px`;
        trail.style.top = `${e.pageY}px`;
    });

    // Cyber drone interaction
    const drone = document.querySelector('.cyber-drone');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 50;
        const y = (e.clientY / window.innerHeight - 0.5) * 50;
        drone.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Cyber trail CSS
const extraStyle = document.createElement('style');
extraStyle.textContent = `
    .cyber-trail {
        position: absolute;
        width: 12px;
        height: 12px;
        background: var(--neon-pink);
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 20px var(--neon-pink);
        opacity: 0.6;
        transform: translate(-50%, -50%);
        transition: all 0.15s ease;
        z-index: 999;
    }
`;
document.head.appendChild(extraStyle);