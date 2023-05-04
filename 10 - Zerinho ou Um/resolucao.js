const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ];

  let zerinho = 0;
    let um = 0;

    jogadores.find((jogador) => {
    if (jogador.jogada == 0) {
        zerinho++
    } else {
        um++
    }
  })

    if (um == 1) {
        const index = jogadores.findIndex(jogadores => jogadores.jogada == 1)
        console.log(jogadores[index].nome);
    } else if (zerinho == 1) {
        const index = jogadores.findIndex(jogadores => jogadores.jogada == 0)
        console.log(jogadores[index].nome);
    } else {
        console.log("NINGUEM");
    }