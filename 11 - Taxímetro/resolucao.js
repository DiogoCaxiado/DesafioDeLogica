const min = 25;
const km = 11.5;

let valor = 0;
    let minRestante = min - 20
    let kmRestante = km - 10

// Cada Minuto da viagem = 50
// Cada Km da viagem = 70

// Cada Minuto Barato = 30
// Cada Km Barato = 50

    if (min <= 20) {
        valor = 50 * min
    }
    else if (min > 20) {
        valor = 50 * (min - minRestante)
        valor += 30 * minRestante
    }
    
    if (km <= 10) {
        valor += 70 * km
    }
    else if (km > 10) {
        valor += 70 * (km - kmRestante)
        valor += 50 * kmRestante
    }

    console.log(valor)