//2)Crea la possibilità di contare il numero di "viaggi" presenti sulla pagina.

cards = document.getElementsByClassName("card");
console.log(cards);

function counter() {
    counter = 0;
    for (const card of cards) {
        counter += 1

        //5)Crea una funzione che rimuova tutte le "card" della pagina
        card.innerHTML= "";
    }

    return counter
}

console.log(counter());

//4)Quando l'utente cliccherà su "Contattaci", fai in modo che il modale venga visualizzato.

const contattaciModale = document.getElementById('contattaci-modale')
if (contattaciModale) {
  contattaciModale.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = contattaciModale.querySelector('.modal-title')
    const modalBodyInput = contattaciModale.querySelector('.modal-body input')

    modalTitle.textContent = `Contattaci via email`
    modalBodyInput.value = recipient
  })
}


