let palabra = prompt("Jugador 1: ingrese una palabra secreta");
let oculto = "_".repeat(palabra.length);
let intentos = 6;

while (intentos > 0 && oculto.includes("_")) {
  let letra = prompt(`Palabra: ${oculto}\nIntentos: ${intentos}\nIngresa una letra:`);

  if (palabra.includes(letra)) {
    let nueva = "";
    for (let i = 0; i < palabra.length; i++) {
      nueva += (palabra[i] === letra) ? letra : oculto[i];
    }
    oculto = nueva;
    alert("¡Bien! " + oculto);
  } else {
    intentos--;
    alert("Fallaste. Te quedan " + intentos + " intentos.");
  }
}


if (oculto === palabra) {
  alert(" Ganaste La palabra era: " + palabra);
} else {
  alert(" Perdiste. La palabra era: " + palabra);
}