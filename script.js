// Passo 1: Pegar os elementos que criamos lá no HTML
const modal = document.getElementById("meuModal");
const imgExpandida = document.getElementById("imgExpandida");
const legenda = document.getElementById("legenda");
const botaoFechar = document.querySelector(".close-btn");

// Passo 2: Pegar todas as imagens da galeria de uma vez
const imagensDaGaleria = document.querySelectorAll(".img-galeria");

// Passo 3: Fazer o JavaScript "ouvir" os cliques em cada uma das imagens
imagensDaGaleria.forEach(imagem => {
    imagem.addEventListener("click", function() {
        modal.style.display = "flex"; // Mostra a tela escura
        
        // Troca 'w=400' por 'w=800' no link da foto para ela carregar com mais qualidade
        imgExpandida.src = this.src.replace("w=400", "w=800"); 
        
        // Pega o texto alternativo (alt) da imagem e usa como legenda
        legenda.innerHTML = this.alt; 
    });
});

// Passo 4: Fechar o modal quando clicar no X
botaoFechar.addEventListener("click", function() {
    modal.style.display = "none";
});

// Extra: Fechar o modal também se o usuário clicar na parte preta fora da foto
window.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});