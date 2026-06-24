// Ejercicio 5 - Retiro de cuenta de ahorros

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que procesa el retiro y retorna un objeto
function procesarRetiro(nombre, saldo, montoRetiro) {

    // Validar que el monto sea mayor que cero
    if (montoRetiro <= 0) {
        return {
            exito: false,
            mensaje: "El monto debe ser mayor a cero"
        };
    }

    // Verificar si el saldo es suficiente para realizar el retiro
    if (saldo >= montoRetiro) {
        return {
            exito: true,
            nombre: nombre,
            saldoAnterior: saldo,
            montoRetirado: montoRetiro,
            nuevoSaldo: saldo - montoRetiro
        };
    }

    // Retornar información cuando el saldo es insuficiente
    return {
        exito: false,
        nombre: nombre,
        faltante: montoRetiro - saldo
    };
}

// Solicitar el nombre del asociado
rl.question("Nombre del asociado: ", (nombre) => {

    // Solicitar el saldo disponible
    rl.question("Saldo disponible: ", (saldo) => {

        // Solicitar el monto que desea retirar
        rl.question("Monto a retirar: ", (montoRetiro) => {

            // Procesar la operación de retiro
            const resultado = procesarRetiro(
                nombre,
                parseFloat(saldo),
                parseFloat(montoRetiro)
            );

            console.log("\n===== RESULTADO =====");

            // Mostrar información cuando el retiro es exitoso
            if (resultado.exito) {

                console.log(`Asociado: ${resultado.nombre}`);
                console.log(`Saldo anterior: $${resultado.saldoAnterior.toLocaleString("es-CO")}`);
                console.log(`Monto retirado: $${resultado.montoRetirado.toLocaleString("es-CO")}`);
                console.log(`Nuevo saldo: $${resultado.nuevoSaldo.toLocaleString("es-CO")}`);

            } else {

                if (resultado.mensaje) {

                    console.log(resultado.mensaje);

                } else {

                    // Mostrar mensaje cuando el saldo es insuficiente
                    console.log(`Asociado: ${resultado.nombre}`);
                    console.log(`Saldo insuficiente.`);
                    console.log(`Le faltan $${resultado.faltante.toLocaleString("es-CO")} para realizar el retiro.`);
                }
            }

            rl.close();
        });
    });
});