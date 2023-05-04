const numero = 10;
const limiteInferior = 5;
const limiteSuperior = 20;

function provaReal (numero, limiteInferior,limiteSuperior) {

    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return "PERTENCE";
    } else {
        return "NAO PERTENCE";
    }
}
console.log(provaReal(numero, limiteInferior, limiteSuperior));
