class nodo {
    constructor(valor){
        this.dato = valor;
        this.sig = null;
    }
}

class lista {
    constructor(){
        this.cabeza = null;
    }

    add(valor) {
        const newNodo = new nodo(valor);
        if (!this.cabeza){
            this.cabeza = newNodo;
        } else{
           let actual = this.cabeza;
           while(actual.sig !== null){
            actual = actual.sig
           }
           actual.sig = newNodo
        }        
    }

    mostrar(){
        let actual = this.cabeza; 
        console.log("Numeros almacenados en la lista:");
        while(actual !== null){
            console.log(actual.dato);
            actual = actual.sig;
        }
    }


}

let a = new lista();

a.add(1);
a.add(4);
a.add(8);
a.add(5);

a.mostrar();