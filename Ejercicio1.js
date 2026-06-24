// Ejercicio 1 - Empresa de mensajería

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar nombre
rl.question("Ingrese su nombre: ", (nombre) => {

    // Solicitar peso
    rl.question("Ingrese el peso del paquete (kg): ", (pesoIngresado) => {

        // Solicitar ciudad
        rl.question("Ingrese la ciudad de destino: ", (ciudad) => {

            let peso = parseFloat(pesoIngresado);
            let tarifaBase = 0;

            // Determinar tarifa según el peso
            if (peso < 2) {
                tarifaBase = 8000;
            } else if (peso >= 2 && peso <= 5) {
                tarifaBase = 15000;
            } else {
                tarifaBase = 25000;
            }

            // Operador ternario para el recargo a Bogotá
            const recargo = ciudad.toLowerCase() === "bogotá" ||
                            ciudad.toLowerCase() === "bogota"
                            ? 5000
                            : 0;

            // Calcular el valor total del envío
            const totalPagar = tarifaBase + recargo;

            // Mostrar el resumen final en consola
            console.log("\n===== RESUMEN DEL ENVÍO =====");
            console.log(`Cliente: ${nombre}`);
            console.log(`Ciudad destino: ${ciudad}`);
            console.log(`Peso: ${peso} kg`);
            console.log(`Tarifa base: $${tarifaBase.toLocaleString("es-CO")}`);
            console.log(`Recargo: $${recargo.toLocaleString("es-CO")}`);
            console.log(`Total a pagar: $${totalPagar.toLocaleString("es-CO")}`);

            rl.close();
        });
    });
});