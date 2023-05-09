/*
let soma = 0;
let continua = true;
while (continua === true) {
  let numero = parseInt(prompt("Digite um número (ou 0 para sair): "));
  soma += numero;
  if (numero === 0){
    continua = false;
  }
}
alert("A soma dos números é: " + soma);

//***************************************************************

let numeros = [3, 44, 63, 24, 66]
function maiorNumero(numeros) {
    let maior = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > maior) {
        maior = numeros[i];
      }
    }
    return maior;
  }
  console.log(maiorNumero(numeros))

//**************************************************************


function imprimirMensagem(palavras) {
    return palavras.join(' ');
}
  
const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"];
const mensagem = imprimirMensagem(palavras);
console.log(mensagem);



const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"];
function construirFrase(palavras) {
let frase = "";
for (let palavra of palavras) {
    frase = frase + " " + palavra;
}
    return frase;
}
console.log(construirFrase(palavras).trim())

/*************************************************************/

let paises = ['Brasil', 'Argentina', 'Russia', 'Liechestein'];
let contador = 1;

for(let pais of paises) {
    switch (pais) {
        case "Brasil":
            console.log(contador++ + " - " + pais + "/BR")
            break;
        case "Argentina":
            console.log(contador++ + " - " + pais + "/AR")
            break;
        case "Russia":
            console.log(contador++ + " - " + pais + "/RU")
            break;
        case "Liechestein":
            console.log(contador++ + " - " + pais + "/LI")
            break;
        default:
            console.log("País não encontrado!")
            break;
    }
}