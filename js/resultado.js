document.addEventListener('DOMContentLoaded', function() {


    pesquisa = document.querySelector('.pesquisa')

    pesquisa.placeholder = localStorage.getItem('historico')

    localStorage.setItem('historico', pesquisa.value)


})