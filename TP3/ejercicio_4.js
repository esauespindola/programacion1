/* 
4. Definir un objeto con las siguientes propiedades:


codProducto
detalle
Precio
stock
ubicación

Ingresar 15 productos y guardarlos en un array de objetos. Generar una segundo array con
los productos ordenados por codProducto.

*/

function cargar_productos() {
    let productos = []
    for (let i = 0; i < 15; i++) {
        let codProducto = parseInt(prompt(`Ingrese el código del producto ${i + 1}:`));
        let detalle = prompt(`Ingrese el detalle del producto ${i + 1}:`);
        let precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}:`));
        let stock = parseInt(prompt(`Ingrese el stock del producto ${i + 1}:`));
        let ubicacion = prompt(`Ingrese la ubicación del producto ${i + 1}:`);

        const producto = {
            codProducto: codProducto,
            detalle: detalle,
            precio: precio,
            stock: stock,
            ubicacion: ubicacion
        }
        productos.push(producto);
    }
    return productos;
}


function ordenar_productos(productos) {
    let orden_productos = [...productos]
    orden_productos.sort((a,b)=> {
        return a.codProducto - b.codProducto
    })
    return orden_productos

}


let mis_productos = cargar_productos()
console.log("Array de productos sin ordenar");
console.table(mis_productos)
let productos_ordenados = ordenar_productos(mis_productos)
console.log("Array de productos ordenados por su código");
console.table(productos_ordenados)
