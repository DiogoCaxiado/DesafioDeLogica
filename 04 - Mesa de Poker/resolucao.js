const min = 2;
const max = 10;
const valores = [0, 5, 6, 10, 11];

function MesaPoker (min, max, arrayValores) {
        
    let mesas = [] 
    
    for (let valor of arrayValores) {
          if (valor >= min && valor <= max) {
              mesas.push(valor)
          }
      }
      console.log(mesas)
  }

 MesaPoker(min, max, valores)