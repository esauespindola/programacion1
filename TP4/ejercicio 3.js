class Nodo {
    constructor(valor) {
        this.dato = valor;
        this.siguiente = null;
    }
}

class COLA {
    constructor() {
        this.frente = null;
        this.final = null;
    }

    encolar(dato) {
        let nuevo = new Nodo(dato);

        if (this.frente == null) {
            this.frente = nuevo;
            this.final = nuevo;
        } else {
            this.final.siguiente = nuevo;
            this.final = nuevo;
        }
    }

    desencolar() {
        let dato = null;

        if (this.frente != null) {
            dato = this.frente.dato;
            this.frente = this.frente.siguiente;

            if (this.frente == null) {
                this.final = null;
            }
        }

        return dato;
    }

    consultarFrente() {
        let dato = null;

        if (this.frente != null) {
            dato = this.frente.dato;
        }

        return dato;
    }
}

let cola = new COLA();
let menu = Number(prompt("Ingrese 1-Encolar, 2-Desencolar, 3-Consultar frente, 4-Salir"));

while (menu != 4) {
    switch (menu) {
        case 1:
            let numero = prompt("Ingrese un numero entero:");

            if (numero != null && numero.trim() != "" && Number.isInteger(Number(numero))) {
                cola.encolar(Number(numero));
                console.log("Numero agregado:", Number(numero));
            } else {
                console.log("Ingrese un numero entero valido");
            }
            break;

        case 2:
            let eliminado = cola.desencolar();

            if (eliminado == null) {
                console.log("La cola esta vacia. No hay elementos para retirar");
            } else {
                console.log("Se elimino:", eliminado);
            }
            break;

        case 3:
            let frente = cola.consultarFrente();

            if (frente == null) {
                console.log("La cola esta vacia");
            } else {
                console.log("El frente es:", frente);
            }
            break;

        default:
            console.log("Opcion incorrecta");
            break;
    }

    menu = Number(prompt("Ingrese 1-Encolar, 2-Desencolar, 3-Consultar frente, 4-Salir"));
}

console.log("Fin del programa");