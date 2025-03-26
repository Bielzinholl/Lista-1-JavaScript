// Passo 1: Solicitar uma frase ao usuário
var frase = prompt("Digite uma frase:");

// Passo 2: Contar as palavras
var palavras = frase.split(" ");
var numeroDePalavras = palavras.length;

// Passo 3: Contar as vogais
var numeroDeVogais = 0;
var vogais = "aeiouAEIOU"; // Incluindo vogais maiúsculas e minúsculas

for (var i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
        numeroDeVogais++;
    }
}

// Passo 4: Exibir o resultado
alert("Número de palavras: " + numeroDePalavras + "\nNúmero de vogais: " + numeroDeVogais);