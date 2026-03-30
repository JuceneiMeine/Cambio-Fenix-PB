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


function openLightbox(elemento, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCap = document.getElementById('lightbox-caption');

    // Captura o SRC da imagem que está dentro do item clicado
    const imagemOriginal = elemento.querySelector('img').src;

    // Aplica ao Lightbox
    lightboxImg.src = imagemOriginal;
    lightboxCap.innerText = caption;
    
    // Exibe o Lightbox
    lightbox.style.display = 'flex';
    
    // Trava a rolagem da página ao fundo
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}




window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    const logo = document.querySelector('.header-logo-image');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});




