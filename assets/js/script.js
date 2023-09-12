const cep = document.querySelector('#cep').value;
const btnConsultar = document.querySelector('#btn');
const btnApagar = document.querySelector('.clear');
const resultadoConsulta = document.querySelector('#resultadoConsulta');
const msgInicial = document.querySelector('#msgInicial')

btnApagar.addEventListener('click', function(){
    cep.value = '';
});

btnConsultar.addEventListener('click', function consultar(){
    msgInicial.style.display = 'none'

    let txtEndereco = '';
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(url).then(function(response){
        console.log(response);
    })
});