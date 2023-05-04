const numeros = [1, 3, 2, 1];

let quantidade = 0;

    const posicaoGoleiro = numeros.filter((numero) => {
        quantidade += numero

    if (quantidade > numeros.length) {
        quantidade -= numeros.length
    } else {
        return quantidade
    }
})

    console.log(quantidade);