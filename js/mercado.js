document.addEventListener('DOMContentLoaded', function() {

    lupa = document.querySelector('.img_lupa')

    pesquisa = document.querySelector('.pesquisa')

    console.log(pesquisa.placeholder)

    lupa.addEventListener('click', function(event) {

        localStorage.setItem('historico', pesquisa.value)


    })

})
