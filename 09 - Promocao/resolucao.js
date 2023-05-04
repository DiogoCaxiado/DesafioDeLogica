const precos = [200, 150, 50, 100];

let somaDoArray = 0;
    let menorValor = precos[0];

    precos.filter((numero) => { 
        if (menorValor >= numero) {
        menorValor = numero
        }  
        somaDoArray += numero 
    })

    if (precos.length >= 3) {
        somaDoArray -= menorValor / 2
    }

console.log(somaDoArray)

