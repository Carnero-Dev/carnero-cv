document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.container-center, .hard-card, .soft-card, .project-card');

    elementsToAnimate.forEach(el => el.classList.add('fade-in-scroll'));

    const observerOptions = {
        threshold: 0.15, // Se activa cuando el 15% del elemento asoma
        rootMargin: "0px 0px -50px 0px" // Un pequeño margen para que no se active justo en el borde
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Una vez aparece, dejamos de observarlo para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => observer.observe(el));
});