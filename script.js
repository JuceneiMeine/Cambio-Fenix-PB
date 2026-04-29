const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const menuLinks = document.querySelectorAll('.menu a');

// 1. Função para abrir/fechar ao clicar no botão hambúrguer
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 2. Função para fechar ao clicar em qualquer link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// =========== LIGTHBOX - CONTAINER ===========

/*
document.querySelectorAll('.foto-item img').forEach(img => {
  img.onclick = function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('img-expandida');
    
    lightbox.style.display = 'flex'; // Mostra o container
    lightboxImg.src = this.src; // Define img clicada c fonte
  }
});
*/

