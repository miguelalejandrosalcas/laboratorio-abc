let cardsVocales = document.getElementById('btn-vocales');
let cardsConsonantes = document.getElementById('btn-consonantes');
let cards = document.querySelectorAll('.card');
let contadorSpan = document.getElementById('contador-span');
let cardAbierta = false;
let contador = 0;

function girarCard(elemento) {
    elemento.classList.toggle('is-flipped');
    
    if (elemento.classList.contains('is-flipped') && !elemento.dataset.contada) {
        contador++;
        contadorSpan.innerText = contador;
        elemento.dataset.contada = "true";
    }
}

cardsVocales.addEventListener('click', function() {
    cards.forEach(card => {
        if (card.dataset.tipo === "consonante") {
            card.style.display = "none";
        }
    });
});

cardsConsonantes.addEventListener('click', function() {
    cards.forEach(card => {
        card.style.display = "block";
    });
});
