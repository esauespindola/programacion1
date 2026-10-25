let limite;
let suma = 0;
let i = 1;

limite = parseInt(prompt ("Ingrese un numero:"), 10);

while (i < limite){
    suma = suma + i;

    i = (i * 10) + 1;
}

console.log("La suma es:" + suma);