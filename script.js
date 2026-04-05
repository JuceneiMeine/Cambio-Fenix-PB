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




// Funções do Lightbox
function openLightbox(elemento, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCap = document.getElementById('lightbox-caption');

    // Encontra a imagem dentro da div clicada
    const imgInside = elemento.querySelector('img');

    if (imgInside) {
        lightboxImg.src = imgInside.src;
        lightboxCap.innerText = caption;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Trava o scroll da página
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava o scroll
}

// Fechar Lightbox ao clicar na tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});


// BOTÃO SAIR

document.getElementById('logoutBtn').addEventListener('click', function(event) {
    // Impede que a página recarregue ou suba para o topo
    event.preventDefault();

    // 1. Limpa os dados de autenticação (ajuste conforme seu sistema)
    localStorage.removeItem('userToken'); 
    sessionStorage.clear();

    // 2. Feedback opcional para o usuário
    alert('Sessão encerrada com sucesso!');

    // 3. Redireciona para a página de login ou home
    window.location.href = 'login.html'; 
});


