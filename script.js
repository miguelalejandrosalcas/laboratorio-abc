/* let letraClick = document.getElementById('letra-a');

letraClick.addEventListener('click', function() {
    const nuevaCard = document.createElement('div');
    nuevaCard.classList.add('card');
    nuevaCard.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
}) */


//Contador de navegador por interaccion

let contador = 0;

function voltear(card) {
    console.log("click funcionando"); 

    const contadorSpan = document.getElementById("interaccion");

    contador++;
    contadorSpan.textContent = contador;

    card.classList.toggle("volteada");
}