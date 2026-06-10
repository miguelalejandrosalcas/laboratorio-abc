let cardsVocales = document.getElementById('btn-vocales');
let cardsConsonantes = document.getElementById('btn-consonantes');
let cards = document.querySelectorAll('.card');
let contadorSpan = document.getElementById('contador-span');
let cardAbierta = false;
let contador = 0;


// letraClick.addEventListener('click', function() {
//     const nuevaCard = document.createElement('div');
//     nuevaCard.classList.add('card');
//     nuevaCard.innerHTML = `
//         <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
//                     card’s content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         `;
// })


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
