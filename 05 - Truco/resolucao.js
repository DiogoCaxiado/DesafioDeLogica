const carta = "Q";

let cartaParaCima;
    
    if (carta === "Q") {
        cartaParaCima = "J";
    }
    else if (carta === "J") {
        cartaParaCima = "K"
    }
    else if (carta === "K") {
        cartaParaCima = "A"
    }
    else if (carta === "A") {
        cartaParaCima = "2"
    }
    else if (carta === "2") {
        cartaParaCima = "3"
    }
    else if (carta === "3") {
        cartaParaCima = "Q"
    }
    
    console.log(cartaParaCima)