const texto = "Cuidado, pois  usuarios as vezes deixam espacos vazios no fim do texto sem querer ";

//Realizar uma conta a partir de cada palavra da frase
//Toda palavra virá de um espaçamento

const contarPalavras = texto.trim().split(" ");
let index = 0;

for (let palavra of contarPalavras) {
    if (palavra == '') {
        contarPalavras.splice(index, 1)
    }
    index++
}
console.log(contarPalavras.length)
console.log(contarPalavras)

