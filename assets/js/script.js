let cep = document.querySelector('#cep');
const btnConsultar = document.querySelector('#btn');
const btnApagar = document.querySelector('.clear');
let resultadoConsulta = document.querySelector('.resultadoConsulta');

const msgInicial = document.querySelector('#msgInicial')

btnApagar.addEventListener('click', function clickApagar(){
    cep.value = '';
    resultadoConsulta.innerHTML = '';
});

btnConsultar.addEventListener('click', function consultar(){

    let url =`https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url).then(function(response){
        response.json().then(function(data){
            render(data)
            })
        })
    });

    function render(dados){

        resultadoConsulta.innerHTML = '';

        if(dados.logradouro !== undefined){
            const endereço = document.createElement('p');
            const bairro = document.createElement('p');
            const cidadeUF = document.createElement('p');


            endereço.setAttribute('class', 'endereco');
            bairro.setAttribute('class', 'bairro');
            cidadeUF.setAttribute('class', 'cidade');

            const textoEndereco = document.createTextNode(`Endereço: ${dados.logradouro}`);
            const textoBairro = document.createTextNode(`Bairro: ${dados.bairro}`);
            const textoCUF = document.createTextNode(`Cidade: ${dados.localidade} - ${dados.uf}`);

            endereço.appendChild(textoEndereco);
            bairro.appendChild(textoBairro);
            cidadeUF.appendChild(textoCUF);
            
            resultadoConsulta.appendChild(endereço);
            resultadoConsulta.appendChild(bairro);
            resultadoConsulta.appendChild(cidadeUF);

        }else{
            const cepInvalido = document.createTextNode('CEP INVÁLIDO.')
            resultadoConsulta.appendChild(cepInvalido);
        }
}