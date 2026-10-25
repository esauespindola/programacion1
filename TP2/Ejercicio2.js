let monto;
let divisa;

monto = parseInt(prompt("Ingrese el monto de su producto:"));

divisa = parseInt(prompt("Selecione su moneda: 1 Dolar, 2 Euro, 3 Real, 4 Yen, 5 Yuan, 6 Libra Britanica, 7 Nuevo sol"));


let calculo = (monto,divisa) => {
    let resultado;

    switch(divisa){
        case 1:
            resultado = monto * 1529;
            break;
        case 2:
            resultado = monto * 1742;
            break;
        case 3:
            resultado = monto * 294;
            break;
        case 4:
            resultado = monto * 4;
            break;
        case 5:
            resultado = monto * 227;
            break;
        case 6:
            resultado = monto * 2020;
            break;
        case 7:
            resultado = monto * 450;
            break;
    }

    return resultado;
}

function impuesto (precioEnPesos) {
    if (precioEnPesos > 20000){
        console.log ( " Su precio Final es: " + (precioEnPesos * 1.02));
    }else{
        console.log ( " Su precio Final es: " + precioEnPesos);
    }
}

let totalCalculado = calculo(monto,divisa);
impuesto(totalCalculado);