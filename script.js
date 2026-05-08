// AOS Animáció indítása
AOS.init({
    duration: 1000,
    once: true
});

// Sötét/Világos mód kapcsoló
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Automatikus görgetés figyelő a navigációhoz
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
        nav.style.padding = "1rem 0";
    } else {
        nav.style.boxShadow = "none";
        nav.style.padding = "1.5rem 0";
    }
});

console.log("Bence Portfólió v1.0 - Megbízhatóság: 10/10");