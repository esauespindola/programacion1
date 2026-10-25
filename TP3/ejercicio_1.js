let p1;
let p2;

for (let i = 0; i < 10; i++) {
    p1 = prompt("Ingresa una palabra:");
    p2 = prompt("Ingresa otra palabra:");

    console.log("Palabra Ingresada: " + p1);
    console.log("Palabra sin repetir letras: " + sin_repetir(p1));
    console.log("Palabra Ingresada 2: " + p2);
    console.log("Comparacion de letras repetidas:");
    console.table(comparar(sin_repetir(p1), p2));
}
function sin_repetir(p1) {
    const palabra1 = p1.split("");
    const letrasrepetidas = new Set(palabra1);
    const nuevapalabra = Array.from(letrasrepetidas).join("");
    return nuevapalabra;
}

function comparar(p1Converted, p2) {
    const palabra2 = p2.split("");
    const palabra1 = p1Converted.split("");
    const comparacion = [];
    for (let valor of palabra1) {
        let contador = 0;
        for (let valor2 of palabra2) {
            if (valor === valor2) {
                contador++;
            }
        }
        comparacion.push({ letra: valor, cantidad: contador });
    }

    return comparacion;
}