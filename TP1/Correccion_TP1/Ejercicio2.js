let seguirjugando = "Si";


while (seguirjugando === "Si" || seguirjugando === "si"){
    
    let player1 = parseInt(prompt("Ingrese un numero del 1 al 10:"), 10);
    let i = 0;
    let acerto = false;

    while( i <= 2 && !acerto ){
       let player2 = parseInt(prompt("Adivine el numero del 1 al 10:"), 10);

        if (player2 === player1){
            console.log("¡Felicidades Ganaste!");
            acerto = true;     
        }else if (player2 < player1){
            console.log("El numero es mayor");
        }else {
            console.log("El numero es menor");
        }

        if (i === 2){
            console.log("¡Agotaste tus 3 intentos! El número era: " + player1);
        }

        i++

    }

    if (seguirjugando === "Si" || seguirjugando === "si") {
        seguirjugando = prompt("¿Quieres jugar de nuevo? (Si/No): ");
    }
}   