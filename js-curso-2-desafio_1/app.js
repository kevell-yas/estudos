let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function cliqueConsole() {
    console.log('O botão foi clicado!');
}

function mensagemAlerta() {
    console.log('Eu amo JS');
}

function perguntaCidade() {
    let cidade = prompt('Qual a sua cidade?');
    alert('Estive em '+cidade+' e lembrei de você!');
}

function somaNumeros() {
    let num1 = prompt('Digite um número');
    let num2 = prompt('Digite outro número');
    let soma = parseInt(num1) + parseInt(num2);
    alert('A soma dos números é: '+soma);
}