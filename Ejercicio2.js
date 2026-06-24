// Ejercicio 2 - Gimnasio

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el nombre del afiliado
rl.question("Ingrese el nombre del afiliado: ", (nombre) => {

    // Solicitar la edad del afiliado
    rl.question("Ingrese la edad: ", (edadIngresada) => {

        // Solicitar el plan que desea adquirir
        rl.question(
            "Seleccione el plan (1=Básico, 2=Estándar, 3=Premium): ",
            (opcionPlan) => {

                const edad = parseInt(edadIngresada);
                let valorPlan = 0;
                let nombrePlan = "";

                // Determinar el plan y su valor usando switch
                switch (opcionPlan) {
                    case "1":
                        nombrePlan = "Básico";
                        valorPlan = 80000;
                        break;

                    case "2":
                        nombrePlan = "Estándar";
                        valorPlan = 130000;
                        break;

                    case "3":
                        nombrePlan = "Premium";
                        valorPlan = 200000;
                        break;

                    default:
                        console.log("Opción no válida");
                        rl.close();
                        return;
                }

                let descuento = 0;

                // Aplicar descuentos según la edad del afiliado
                if (edad < 18) {
                    descuento = valorPlan * 0.20;
                } else if (edad >= 60 && edad <= 99) {
                    descuento = valorPlan * 0.30;
                }

                // Calcular el valor final a pagar
                const valorFinal = valorPlan - descuento;

                // Mostrar el resumen de la afiliación
                console.log("\n===== RESUMEN AFILIADO =====");
                console.log(`Nombre: ${nombre}`);
                console.log(`Plan: ${nombrePlan}`);
                console.log(`Valor plan: $${valorPlan.toLocaleString("es-CO")}`);
                console.log(`Descuento: $${descuento.toLocaleString("es-CO")}`);
                console.log(`Valor final: $${valorFinal.toLocaleString("es-CO")}`);

                rl.close();
            }
        );
    });
});