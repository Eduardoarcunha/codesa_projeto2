document.addEventListener('DOMContentLoaded', function() {



    pagamento = document.querySelectorAll('.li_pagamento')

    for (metodo of pagamento) {
        console.log(metodo);
        metodo.addEventListener('click', function(event) {

            for (metodo2 of pagamento) {
                if (metodo2 != event.currentTarget) {
                metodo2.style.color = 'black'
                metodo2.style.backgroundColor = 'white';

                }

            }

            event.currentTarget.style.color = '#FAEF5D';
            event.currentTarget.style.backgroundColor = '#37AD69';

            console.log(event.currentTarget.innerHTML)

        })
    }



})