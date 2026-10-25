// Función para calcular la distancia entre dos puntos (x1, y1) y (x2, y2)
function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Crear matriz 10x2
let matriz = [];
for (let i = 0; i < 10; i++) {
    let x = parseFloat(prompt("Ingrese la coordenada X"));
    let y = parseFloat(prompt("Ingrese la coordenada Y"));
    matriz.push([x, y]);
}

// Crear matriz de distancias 10x10
let matrizDistancias = [];

for (let i = 0; i < 10; i++) {
    matrizDistancias[i] = [];
    for (let j = 0; j < 10; j++) {
        if (i === j) {
            matrizDistancias[i][j] = 0; // distancia a sí mismo
        } else {
            let d = calcularDistancia(matriz[i][0], matriz[i][1], matriz[j][0], matriz[j][1]);
            matrizDistancias[i][j] = d.toFixed(2);
        }
    }
}

// Mostrar matriz original y matriz de distancias
console.log("Matriz original (X, Y):");
console.table(matriz);

console.log("Matriz de distancias:");
console.table(matrizDistancias);