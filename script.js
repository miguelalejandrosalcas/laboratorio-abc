let cardsVocales = document.getElementById('btn-vocales');
let cardsConsonantes = document.getElementById('btn-consonantes');
let cards = document.querySelectorAll('.card');
let cardFrente = document.querySelectorAll('.card-frente');
let contadorSpan = document.getElementById('contador-span');
let contador = 0;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function girarCard(elemento) {
    elemento.classList.toggle('is-flipped');
    cardFrente.forEach(cardFrente => {
        cardFrente.style.backgroundColor = getRandomColor();
    });
    
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
