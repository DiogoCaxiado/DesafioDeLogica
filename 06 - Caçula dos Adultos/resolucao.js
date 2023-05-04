const lista = [12, 18, 27];

const maiorIdade = lista.filter((idade) => {
    return idade > 17
    }) 

    let verificacao = false;
    let menorIdade = maiorIdade[0];

    for (let i = 0; i < maiorIdade.length; i++) {
        if (maiorIdade[i] <= menorIdade) {
         menorIdade = maiorIdade[i];
         verificacao = true;
        
        }
    }

    if (verificacao) {
        console.log(menorIdade);
    } else {
        console.log("CRESCA E APARECA")
    }