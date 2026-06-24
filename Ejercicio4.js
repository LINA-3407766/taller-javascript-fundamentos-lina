// Ejercicio 4 - Reporte semanal de ventas

// Arreglo con las ventas registradas durante la semana
const ventas = [
    { dia: "Lunes", vendedor: "Ana", unidades: 8, totalVendido: 250000 },
    { dia: "Martes", vendedor: "Carlos", unidades: 15, totalVendido: 420000 },
    { dia: "Miércoles", vendedor: "Luisa", unidades: 12, totalVendido: 380000 },
    { dia: "Jueves", vendedor: "Pedro", unidades: 7, totalVendido: 210000 },
    { dia: "Viernes", vendedor: "María", unidades: 18, totalVendido: 550000 }
];

// Función para calcular el total vendido en la semana
function calcularTotalSemana(datos) {
    return datos.reduce((acumulado, venta) => {
        return acumulado + venta.totalVendido;
    }, 0);
}

// Función para encontrar el día con mayor venta
function encontrarMejorDia(datos) {
    return datos.reduce((mejor, venta) => {
        return venta.totalVendido > mejor.totalVendido ? venta : mejor;
    });
}

// Función para filtrar días con más de 10 unidades vendidas
function filtrarDiasDestacados(datos) {
    return datos.filter(venta => venta.unidades > 10);
}

// Función para imprimir el reporte completo
function imprimirReporte() {

    // Obtener los datos necesarios para el reporte
    const totalSemana = calcularTotalSemana(ventas);
    const mejorDia = encontrarMejorDia(ventas);
    const diasDestacados = filtrarDiasDestacados(ventas);

    console.log("===== REPORTE SEMANAL DE VENTAS =====\n");

    console.log("Ventas registradas:");

    // Recorrer y mostrar las ventas de cada día
    for (const venta of ventas) {
        console.log(
            `${venta.dia} | Vendedor: ${venta.vendedor} | Unidades: ${venta.unidades} | Total: $${venta.totalVendido.toLocaleString("es-CO")}`
        );
    }

    console.log("\n===== RESUMEN =====");

    console.log(
        `Total vendido en la semana: $${totalSemana.toLocaleString("es-CO")}`
    );

    console.log(
        `Mejor día: ${mejorDia.dia} con ventas por $${mejorDia.totalVendido.toLocaleString("es-CO")}`
    );

    console.log("\nDías con más de 10 unidades vendidas:");

    // Mostrar los días destacados por cantidad de unidades vendidas
    for (const dia of diasDestacados) {
        console.log(
            `${dia.dia} - ${dia.unidades} unidades vendidas`
        );
    }
}

// Llamado de la función principal
imprimirReporte();