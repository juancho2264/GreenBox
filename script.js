document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Configuración de Animaciones de Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-reveal");
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll(".reveal, .reveal-right, .reveal-up");
    targets.forEach(el => observer.observe(el));

    // 2. Lógica para el menú activo 
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 3. Efecto en el Header al hacer scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.7)';
            header.style.borderBottom = 'none';
        } else {
            header.style.boxShadow = 'none';
            header.style.borderBottom = '1px solid #111';
        }
    });

    // 4. Manejo del Formulario Corporativo
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            alert('¡Consulta enviada correctamente! Nos pondremos en contacto a la brevedad.');
            contactForm.reset(); 
        });
    }

    // 5. Menú Hamburguesa para móvil
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('nav-open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Cerrar el menú al hacer clic en cualquier enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', false);
            });
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                navMenu.classList.remove('nav-open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', false);
            }
        });
    }

});