let respuesta = prompt("Bosque oscuro.\n1: Ir a la cabaña\n2: Ir al río");

if (respuesta === "1") {
    let cabana = prompt("Cabaña vieja.\n1: Entrar\n2: Alejarte");
    if (cabana === "1") {
        console.log("Encuentras oro. ¡Ganaste!");
    } else if (cabana === "2") {
        console.log("Te pierdes. Fin.");
    }
} else if (respuesta === "2") {
    let rio = prompt("Río profundo.\n1: Nadar\n2: Buscar puente");
    if (rio === "1") {
        console.log("La corriente te arrastra. Fin.");
    } else if (rio === "2") {
        console.log("Llegas al pueblo. ¡Sobreviviste!");
    }
}