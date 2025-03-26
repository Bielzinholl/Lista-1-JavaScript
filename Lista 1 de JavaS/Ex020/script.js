var numero = Number(prompt("Digite um número:"));
var mensagem;
if (numero % 2 === 0) {
    mensagem = "O número " + numero + " é par.";
} else {
    mensagem = "O número " + numero + " é ímpar.";
}
alert(mensagem);