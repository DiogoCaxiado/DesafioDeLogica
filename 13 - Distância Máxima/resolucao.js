const input = "3\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"

const linhas = input.trim().split("\n");
const n = parseInt(linhas[0], 10);
let somaFinal = 0;
let maiorDistancia = 0;

const coordenadas = [];

for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseFloat(coord[0]),
        y: parseFloat(coord[1])
    })
    for (let i = 0; i < coordenadas.length; i++) {
      const c1 = coordenadas[i];
    
      for (let j = i + 1; j < coordenadas.length; j++) {
        const c2 = coordenadas[j];

        somaFinal = ((c1.x - c2.x) ** 2) + ((c1.y - c2.y) ** 2)

        if (somaFinal > maiorDistancia) {
          maiorDistancia = somaFinal;
        }
      }
    }
  }
  console.log(Math.sqrt(maiorDistancia))