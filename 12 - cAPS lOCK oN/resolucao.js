let input = "cAPS"

// Receberá uma palavra
// se a primeira letra for minuscula e a restante for maiscula
// inverta todas as letras

// se todas as letras forem minusculas, mantenha da mesma forma

// se todas as letras forem maisculas, transforme em minusculas

const correcao = ((string) => {
    if (string[0] === string[0].toLowerCase() && string.slice(1) === string.slice(1).toUpperCase()) {
        console.log(`${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`)
    }
    else if (string === string.toUpperCase()) {
        console.log(`${string.toLowerCase()}`)
    }
    else {
        console.log(`${string}`)
    }
})

correcao(input);