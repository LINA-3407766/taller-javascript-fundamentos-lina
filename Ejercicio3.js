// Ejercicio 3 - Rendimiento de estudiantes

// Arreglo con los nombres y notas de los estudiantes
const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Carlos", nota: 3.2 },
    { nombre: "Luisa", nota: 4.8 },
    { nombre: "Pedro", nota: 2.9 },
    { nombre: "María", nota: 3.7 },
    { nombre: "Jorge", nota: 2.5 }
];

// Variables para almacenar los resultados del análisis
let sumaNotas = 0;
let notaAlta = estudiantes[0].nota;
let notaBaja = estudiantes[0].nota;
let aprobados = 0;

console.log("=== REPORTE DE ESTUDIANTES ===");

// Recorrer el arreglo para evaluar a cada estudiante
for (const estudiante of estudiantes) {

    // Determinar si el estudiante aprobó o reprobó
    const estado = estudiante.nota >= 3.5
        ? "APROBADO"
        : "REPROBADO";

    console.log(
        `Nombre: ${estudiante.nombre} | Nota: ${estudiante.nota} | Estado: ${estado}`
    );

    // Acumular las notas para calcular el promedio
    sumaNotas += estudiante.nota;

    // Buscar la nota más alta
    if (estudiante.nota > notaAlta) {
        notaAlta = estudiante.nota;
    }

    // Buscar la nota más baja
    if (estudiante.nota < notaBaja) {
        notaBaja = estudiante.nota;
    }

    // Contar los estudiantes aprobados
    if (estudiante.nota >= 3.5) {
        aprobados++;
    }
}

// Calcular el promedio del grupo
const promedio = sumaNotas / estudiantes.length;

// Mostrar el resumen final
console.log("\n=== RESUMEN DEL GRUPO ===");
console.log(`Promedio del grupo: ${promedio.toFixed(2)}`);
console.log(`Nota más alta: ${notaAlta}`);
console.log(`Nota más baja: ${notaBaja}`);
console.log(`Estudiantes aprobados: ${aprobados}`);