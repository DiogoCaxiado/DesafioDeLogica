const input = "cubos\ncuggbyos";

    const separacao = input.trim().split("\n")
    console.log(separacao)

    const senha = separacao[0].split("")
    const tentativa = separacao[1].split("")
    let letras = "";
    let contador = 0;

    for (let i = 0; i < tentativa.length;) {
        if (senha[i] === tentativa[contador]) {
            letras += senha[i]
            i++;
        }
        contador++
        if (tentativa[contador] === undefined) {
            break;
        }
    }

    if (letras === separacao[0]) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
  