document.addEventListener('DOMContentLoaded', () => {
    const textos = document.querySelectorAll('.texto');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mostrar');
            }
        });
    });

    textos.forEach(texto => {
        observer.observe(texto);
    });
});