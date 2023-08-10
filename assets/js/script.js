const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", () => {
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;
    console.log(imagemAtual);

    imagensPainel.forEach((imagem) => {
        imagem.classList.remove("mostrar");
    });

    imagensPainel[imagemAtual].classList.add("mostrar");
});

setaVoltar.addEventListener("click", () => {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    imagensPainel.forEach((imagem) => {
        imagem.classList.remove("mostrar");
    });

    imagensPainel[imagemAtual].classList.add("mostrar");
});

function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    }
}
