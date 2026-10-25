export function calcularAumento(datos) {

    if (datos.precio < 60) {
        datos.porcentaje = 20;
    } else if (datos.precio < 100) {
        datos.porcentaje = 15;
    } else {
        datos.porcentaje = 10;
    }

    datos.aumento = datos.precio * datos.porcentaje / 100;

    datos.precioActualizado = datos.precio + datos.aumento;
}