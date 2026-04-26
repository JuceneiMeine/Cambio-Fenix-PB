const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
    // Alterna a animação do botão (X)
    hamburgerBtn.classList.toggle('active');
    // Alterna a visibilidade do menu
    navMenu.classList.toggle('active');
});

// Fechar o menu ao clicar em qualquer link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});






