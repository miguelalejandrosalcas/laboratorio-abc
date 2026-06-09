
//El filtro Muestra laas vocales o todo el abecedario
function filtrar(tipo){

    let cards = document.querySelectorAll(".card");
    cards.forEach(function(card){

        if(tipo === "vocales"){

            if(card.dataset.tipo === "consonante"){
                card.style.display = "none";
            }else{
                card.style.display = "block";
            }

        }else{

            card.style.display = "block";

        }

    });
}