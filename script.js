document.addEventListener("DOMContentLoaded", function () {
    let depositoFeito = localStorage.getItem("depositoConfirmado") === "true";

    if (depositoFeito) {
        document.getElementById("bloqueio").style.display = "none";
        document.getElementById("jogo").style.display = "block";
    }
});

let tentativas = 3;
let bauPremiado = Math.floor(Math.random() * 9);
let jogoEncerrado = false;

function escolherBaú(index) {
    if (jogoEncerrado || tentativas === 0) return;

    let box = document.getElementsByClassName("box")[index];

    if (index === bauPremiado) {
        box.innerHTML = "🏆";
        box.style.animation = "pulse 0.5s infinite";
        document.querySelector(".tentativas").innerText = "🎉 Parabéns! Você ganhou!";
        jogoEncerrado = true;
    } else {
        box.innerHTML = "❌";
        tentativas--;
        document.getElementById("tentativas").innerText = tentativas;

        if (tentativas === 0) {
            document.querySelector(".tentativas").innerText = "😢 Fim de jogo! O baú premiado era outro.";
            document.getElementsByClassName("box")[bauPremiado].innerHTML = "🏆";
        }
    }
    box.classList.add("reveal");
}

function resetarJogo() {
    tentativas = 3;
    bauPremiado = Math.floor(Math.random() * 9);
    jogoEncerrado = false;
    document.getElementById("tentativas").innerText = tentativas;

    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("reveal");
    }
}
function escolherBaú(index) {
    if (jogoEncerrado || tentativas === 0) return;

    let box = document.getElementsByClassName("box")[index];

    if (index === bauPremiado) {
        box.innerHTML = "🏆";
        box.style.animation = "pulse 0.5s infinite";
        document.getElementById("telaVitoria").classList.add("mostrar");
        jogoEncerrado = true;
    } else {
        box.innerHTML = "❌";
        tentativas--;
        document.getElementById("tentativas").innerText = tentativas;

        if (tentativas === 0) {
            document.querySelector(".tentativas").innerText = "😢 Fim de jogo! O baú premiado era outro.";
            document.getElementsByClassName("box")[bauPremiado].innerHTML = "🏆";
        }
    }
    box.classList.add("reveal");
}

function resetarJogo() {
    tentativas = 3;
    bauPremiado = Math.floor(Math.random() * 9);
    jogoEncerrado = false;
    document.getElementById("tentativas").innerText = tentativas;

    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("reveal");
    }

    document.getElementById("telaVitoria").classList.remove("mostrar");
}
