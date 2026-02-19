document.addEventListener("DOMContentLoaded", () => {
    /*--- SELECTOR DE LENGUAJE ---*/
    const translations = {
        es: { 
            "nav-home": "Inicio",
            "nav-about": "Sobre Mi",
            "nav-projects": "Proyectos",
            "nav-contact": "Contacto",
            "job-title": " Programador Full Stack y Desarrollador de videojuegos ",
            "social-links": " Redes Profesionales ",
            "section-title-about": "Sobre Mi",
            "about-desc": `Mi trayectoria une la ingeniería robusta con la creación artística. Como <span class="accent">Programador Full Stack y Desarrollador de Videojuegos</span>, construyo arquitecturas escalables y sistemas optimizados al servicio del usuario. Aprendí mediante ingeniería inversa, desarrollando una capacidad analítica clave para <span class="accent">resolver crisis técnicas y optimizar flujos de trabajo</span>. Analizo rápido y ejecuto soluciones sin frenar al equipo, combinando la precisión del software con la <span class="accent">sensibilidad del diseño interactivo</span> y el arte.`,
            "download-fullstack": "Descargar CV - FullStack",
            "download-gamedev": "Descargar CV - GameDev",
            "personal-label-1": "Edad:",
            "personal-info-1": "24 años",
            "personal-label-2": "Ubicación:",
            "location-label": "Málaga, España",
            "personal-label-3": "Idiomas:",
            "personal-info-3": "Español nativo / Inglés (B2)",
            "personal-label-4": "Carné de conducir:",
            "personal-info-4": "B ",
            "hobby-1": "Videojuegos",
            "hobby-2": "Piano",
            "hobby-3": "Viajar",
            "hobby-4": "Desarmar y reconstruir",
            "hobby-5": "Astronomia",
            "hobby-6": "Estrategia",
            "section-title-skills": "Skills y Stack",
            "soft-skill-1": " 🤝 Trabajo en equipos multidisciplinares ",
            "soft-skill-2": " 📚 Autodidacta ",
            "soft-skill-3": " 📋 Organizado ",
            "soft-skill-4": " 💪 Trabajo bajo presión ",
            "soft-skill-5": " 🚀 Audacia ",
            "cv-education-title": "Formación",
            "education-1-date": "Septiembre 2025 - Diciembre 2025",
            "education-1-title": "Bootcamp programación Full Stack",
            "education-1-school": "Fundación ESPLAI",
            "education-1-description-1": "Curso práctico de 56 horas en soft skills.",
            "education-1-description-2": "Certificado de Azure (AZ-900).",
            "education-1-description-3": "Todo desarrollo Full Stack (Frontend, Backend, BbDd, Despliegue).",
            "education-2-date": "Septiembre 2022 - Junio 2024",
            "education-2-title": "Desarrollador de videojuegos",
            "education-2-school": "EVAD Málaga",
            "education-2-description-1": "Formación completa en todas las áreas del desarrollo.",
            "education-2-description-2": "Participación en equipos multidisciplinares y Game Jams..",
            "education-2-description-3": "Descubrí mi vocación por la programación y diseño de videojuegos.",
            "education-2-soft-skill-1": "Trabajo con equipos Multidisciplinares",
            "cv-other-studies-title": "Otros Estudios",
            "cv-other-studies-1": "Curso de especialización, Ciberseguridad.",
            "cv-other-studies-2": "Administración de sistemas informáticos en red (ASIR).",
            "cv-other-studies-3": "Administración y gestión de empresas.",
            "cv-other-studies-soft-skill-1": "Ciberseguridad",
            "cv-other-studies-soft-skill-2": "Administración",
            "cv-work-title": "Experiencia Laboral",
            "work-1-date": "Mayo 2024 - Actualidad",
            "work-1-title": "Programador Lider en Unity y Unreal || Co-Fundador",
            "work-1-company": "Typing Monnke",
            "work-1-description-1": "Coordinación de un equipo multidisciplinar",
            "work-1-description-2": "Resolución de crisis técnicas y de producción",
            "work-1-description-3": "Ingeniería inversa e integración de nuevas tecnologías en los proyectos.",
            "work-1-description-4": "Desarrollo de sistemas escalables orientadas a herramientas de diseño.",
            "work-1-description-5": "Gestión de flujos de trabajo con Git y GitHub.",
            "work-1-description-6": "Uso de metodología Scrum utilizando Jira y otras herramientas de Atlasian.",
            "work-1-soft-skill-1": "Liderazgo",
            "work-1-soft-skill-2": "Scrum",
            "other-jobs-title": "Trabajos Varios",
            "other-jobs-subtitle": " Europa (Paises Bajos, Suecia, Alemania) y ST Marten (Antillas)",
            "other-jobs-description-1": "Bartender / Camarero en eventos.",
            "other-jobs-description-2": "Mozo de almacén / Operador Logístico",
            "other-jobs-description-3": "Ayudante de veterinario",
            "other-jobs-impact": `<span class="accent">Impacto:</span> Adaptabilidad cultural absoluta y gestión de equipos en entornos de alta presión con personas de diversos países.`,
            "other-jobs-soft-skill-1": "Inglés",
            "other-jobs-soft-skill-2": "Audacia",
            "other-jobs-soft-skill-3": "Cadena de mandos",
            "other-jobs-soft-skill-4": "Disciplina",
            "other-jobs-soft-skill-5": "Autogestión",
            "section-title-projects": "Proyectos",
            "project-dishdraft-description": "Plataforma Full Stack de gestión nutricional y organización familiar. El proyecto evolucionó de un MVP académico a una herramienta compleja que integra la API de OpenFoodFacts para procesar información nutricional en tiempo real. Diseñé e implementé el Backend con MongoDB, el sistema de autenticación y la sincronización de datos con el Frontend. Permite a los usuarios planificar menús semanales y realizar un seguimiento exhaustivo de ingredientes reales y valores energéticos.",
            "project-dishdraft-link": "Ver Demo Tecnica",
            "project-disconnected-description": "Survival Horror desarrollado en Unreal Engine 5. Como Lead Programmer, diseñé y ejecuté la arquitectura lógica central del título: sistemas de guardado dinámico, gestión de inventario, árboles de comportamiento para IA y el motor de eventos globales. Además de la implementación técnica, coordiné al equipo multidisciplinar para garantizar la cohesión entre las mecánicas de juego y el rendimiento técnico bajo los estándares de UE5.",
            "project-disconnected-link": "Ver Página de Steam",
            "project-typingmonke-description": "Co-fundador y Desarrollador en este colectivo técnico especializado en Unity y Unreal Engine 5. Durante más de 2 años, he liderado el desarrollo de múltiples proyectos publicados en Itch.io y pivotado estrategias de producción basadas en el análisis del mercado (como la transición de 'Jackplot' a 'Disconnected'). Demuestra mi capacidad para gestionar flujos de trabajo profesionales, metodologías ágiles y equipos remotos de forma sostenida y eficiente.",
            "project-typingmonke-link": "Linktree del equipo",
            "section-title-contact": "Información de Contacto",
            "telephone-label": "Teléfono:",
            "location-label": "Ubicación:",
            "looking-for-job": " Buscando Empleo ",
            "job-full-time": "Jornada completa o parcial.",
            "job-remote": "Presencial (Málaga) o Remoto.",
            "job-travel": "Disponibilidad para desplazamientos ocasionales a nivel internacional.",
            "title-last-activity": "Última Actividad",
            "last-activity-date": "12 febrero - 2026",
            "last-activity-title": "Lanzamiento de página de Steam",
            "last-activity-description": '¡Hito alcanzado! Hemos publicado oficialmente la página de Steam de <span class="accent">Disconnected</span>. Este proceso ha implicado la gestión de activos de marketing, optimización de tráilers y el cumplimiento de los estándares de publicación de Valve. Tras meses de desarrollo liderando la arquitectura técnica en <span class="accent">Unreal Engine 5</span>, este paso marca el inicio de nuestra fase de comunidad y wishlist, acercando el proyecto al mercado global de videojuegos.',
            "last-activity-link": "Ver Página de Steam"
         },
        en: { 
            "nav-home": "Home",
            "nav-about": "About Me",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "job-title": " Full Stack Programmer & Game Developer ",
            "social-links": " Professional Networks ",
            "section-title-about": "About Me",
            "about-desc": `My career bridges robust engineering and artistic creation. As a <span class="accent">Full Stack Programmer and Game Developer</span>, I build scalable architectures and optimized systems focused on the user. I learned through reverse engineering, developing a key analytical capacity to <span class="accent">solve technical crises and optimize workflows</span>. I analyze quickly and execute solutions without slowing down the team, combining software precision with <span class="accent">interactive design sensitivity</span> and art.`,
            "download-fullstack": "Download CV - FullStack",
            "download-gamedev": "Download CV - GameDev",
            "personal-label-1": "Age:",
            "personal-info-1": "24 years old",
            "personal-label-2": "Location:",
            "location-label": "Málaga, Spain",
            "personal-label-3": "Languages:",
            "personal-info-3": "Native Spanish / English (B2)",
            "personal-label-4": "Driver's license:",
            "personal-info-4": "B (Car)",
            "hobby-1": "Gaming",
            "hobby-2": "Piano",
            "hobby-3": "Traveling",
            "hobby-4": "Tinkering & Rebuilding",
            "hobby-5": "Astronomy",
            "hobby-6": "Strategy",
            "section-title-skills": "Skills & Stack",
            "soft-skill-1": " 🤝 Multidisciplinary Teamwork ",
            "soft-skill-2": " 📚 Self-taught ",
            "soft-skill-3": " 📋 Organized ",
            "soft-skill-4": " 💪 Work under pressure ",
            "soft-skill-5": " 🚀 Audacity ",
            "cv-education-title": "Education",
            "education-1-date": "September 2025 - December 2025",
            "education-1-title": "Full Stack Development Bootcamp",
            "education-1-school": "ESPLAI Foundation",
            "education-1-description-1": "56-hour practical course in soft skills.",
            "education-1-description-2": "Azure Certificate (AZ-900).",
            "education-1-description-3": "End-to-end Full Stack development (Frontend, Backend, DB, Deployment).",
            "education-2-date": "September 2022 - June 2024",
            "education-2-title": "Game Developer",
            "education-2-school": "EVAD Málaga",
            "education-2-description-1": "Comprehensive training in all areas of development.",
            "education-2-description-2": "Participation in multidisciplinary teams and Game Jams.",
            "education-2-description-3": "Discovered my vocation for programming and game design.",
            "education-2-soft-skill-1": "Multidisciplinary teamwork",
            "cv-other-studies-title": "Other Studies",
            "cv-other-studies-1": "Specialization course, Cybersecurity.",
            "cv-other-studies-2": "Network Computer Systems Administration (ASIR).",
            "cv-other-studies-3": "Business Management and Administration.",
            "cv-other-studies-soft-skill-1": "Cybersecurity",
            "cv-other-studies-soft-skill-2": "Administration",
            "cv-work-title": "Work Experience",
            "work-1-date": "May 2024 - Present",
            "work-1-title": "Lead Programmer (Unity & Unreal) || Co-Founder",
            "work-1-company": "Typing Monke",
            "work-1-description-1": "Coordination of a multidisciplinary team.",
            "work-1-description-2": "Resolution of technical and production crises.",
            "work-1-description-3": "Reverse engineering and integration of new technologies.",
            "work-1-description-4": "Development of scalable systems oriented towards design tools.",
            "work-1-description-5": "Workflow management with Git and GitHub.",
            "work-1-description-6": "Scrum methodology using Jira and Atlassian tools.",
            "work-1-soft-skill-1": "Leadership",
            "work-1-soft-skill-2": "Scrum",
            "other-jobs-title": "Various Roles",
            "other-jobs-subtitle": " Europe (Netherlands, Sweden, Germany) and St. Maarten (Antilles)",
            "other-jobs-description-1": "Bartender / Event Waiter.",
            "other-jobs-description-2": "Warehouse Worker / Logistics Operator.",
            "other-jobs-description-3": "Veterinary Assistant.",
            "other-jobs-impact": `<span class="accent">Impact:</span> Absolute cultural adaptability and team management in high-pressure environments with people from diverse countries.`,
            "other-jobs-soft-skill-1": "English",
            "other-jobs-soft-skill-2": "Audacity",
            "other-jobs-soft-skill-3": "Chain of Command",
            "other-jobs-soft-skill-4": "Discipline",
            "other-jobs-soft-skill-5": "Self-management",
            "section-title-projects": "Projects",
            "project-dishdraft-description": "Full Stack platform for nutritional management and family organization. The project evolved from an academic MVP to a complex tool integrating the OpenFoodFacts API to process nutritional information in real-time. I designed and implemented the Backend with MongoDB, the authentication system, and frontend data synchronization. It allows users to plan weekly menus and track real ingredients and nutritional values.",
            "project-dishdraft-link": "View Technical Demo",
            "project-disconnected-description": "Survival Horror developed in Unreal Engine 5. As Lead Programmer, I designed and executed the title's core logic architecture: dynamic save systems, inventory management, AI behavior trees, and the global event engine. Beyond technical implementation, I coordinated the multidisciplinary team to ensure cohesion between game mechanics and technical performance under UE5 standards.",
            "project-disconnected-link": "View Steam Page",
            "project-typingmonke-description": "Co-founder and Developer in this technical collective specialized in Unity and Unreal Engine 5. For over 2 years, I have led the development of multiple projects published on Itch.io and pivoted production strategies based on market analysis (such as the transition from 'Jackplot' to 'Disconnected'). Demonstrates my ability to manage professional workflows, agile methodologies, and remote teams efficiently.",
            "project-typingmonke-link": "Team Linktree",
            "section-title-contact": "Contact Information",
            "telephone-label": "Phone:",
            "location-label": "Location:",
            "looking-for-job": " Actively Seeking Employment ",
            "job-full-time": "Full-time or part-time roles.",
            "job-remote": "On-site (Málaga) or Remote.",
            "job-travel": "Available for occasional international travel.",
            "title-last-activity": "Latest Activity",
            "last-activity-date": "February 12, 2026",
            "last-activity-title": "Steam Page Launch",
            "last-activity-description": `Milestone reached! We have officially launched the Steam store page for <span class="accent">Disconnected</span>. This process involved managing marketing assets, trailer optimization, and meeting Valve's rigorous publishing standards. After months of leading the technical architecture in <span class="accent">Unreal Engine 5</span>, this step marks the beginning of our community and wishlist phase, bringing the project closer to the global gaming market.`,
            "last-activity-link": "View Steam Page"
         }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || localStorage.getItem('preferredLang') || 'es';
    
    function updateContent(lang) {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });
        document.querySelectorAll('.language-selector a').forEach(link => {
        // Obtenemos el idioma del enlace (es o en) desde el onclick o el href
        const isSelected = link.getAttribute('onclick').includes(`'${lang}'`);
        
        if (isSelected) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
        document.documentElement.lang = lang;
    }

    function changeLanguage(lang) {
        const newUrl = `${window.location.pathname}?lang=${lang}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
        
        localStorage.setItem('preferredLang', lang);
        updateContent(lang);
        gtag('config', 'G-VFQEJ35YK8', {'page_path': location.pathname + location.search + location.hash});
    }
    updateContent(lang);

    /* --- ANIMACION FADE-IN SCROLL --- */
    const elementsToAnimate = document.querySelectorAll('.container-center, .hard-card, .soft-card, .project-card');
    elementsToAnimate.forEach(el => el.classList.add('fade-in-scroll'));

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => observer.observe(el));

        /* --- "VER MAS..." BOTON --- */
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const textElement = this.parentElement.querySelector('.collapsible-text');
            if (textElement) {
                const isExpanded = textElement.classList.toggle('expanded');
                this.textContent = isExpanded ? 'Hidde' : 'Read more...';
            }
        });
    });
});

