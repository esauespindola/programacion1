class Nodo {
    constructor(valor) {
        this.dato = valor;
        this.siguiente = null;
    }
}

class Numeros {
    constructor() {
        this.tope = null;
    }

    apilar(dato) {
        let nuevo = new Nodo(dato);
        nuevo.siguiente = this.tope;
        this.tope = nuevo;
    }

    desapilar() {
        let dato = null;
        if (this.tope !== null) {
            dato = this.tope.dato;
            this.tope = this.tope.siguiente;
        }

        return dato;
    }

    consultarTope() {
        let dato = null;
        if (this.tope !== null) {
            dato = this.tope.dato;
        }

        return dato;
    }
}

let numeros = new Numeros();
let menu = Number(prompt("Ingrese un numero 1-Apilar,2-Desapilar,3-Consultar tope o 4-Salir"));


while (menu !== 4) {
    switch (menu) {
        case 1:
            let numero = Number(prompt("Ingrese un numero"));
            numeros.apilar(numero);
            console.log(numeros);
            break;

        case 2:
            console.log("Se eliminó:", numeros.desapilar());
            console.log(numeros);
            break;

        case 3:
            console.log("El nuevo tope es:", numeros.consultarTope());
            break;

        default:
            break;
    }

    menu = Number(prompt("Ingrese 1-Apilar,2-Desapilar,3-Consultar tope o 4-Salir"));
}