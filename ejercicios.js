// --- Ejercicio 1: Declarar una variable nombre y mostrarla ---
console.log("--- Ejercicio 1 ---");
let nombre = "Israel Quispitupa Ccama";
console.log(nombre);

// --- Ejercicio 2: Declarar dos variables a y b y mostrar su suma ---
console.log("\n--- Ejercicio 2 ---");
let a = 15;
let b = 25;
console.log(a + b);

// --- Ejercicio 3: Declarar una variable edad e imprimir un mensaje ---
console.log("\n--- Ejercicio 3 ---");
let edad = 35;
console.log(`Tengo ${edad} años.`);

// --- Ejercicio 4: Convertir un número a cadena usando .toString() ---
console.log("\n--- Ejercicio 4 ---");
let numero = 2026;
let cadena = numero.toString();
console.log(typeof cadena, cadena);

// --- Ejercicio 5: Declarar una constante PI y mostrar su valor ---
console.log("\n--- Ejercicio 5 ---");
const PI = 3.14159;
console.log(PI);

// --- Ejercicio 6: Calcular el área de un rectángulo ---
console.log("\n--- Ejercicio 6 ---");
let base = 10;
let altura = 5;
let area = base * altura;
console.log(`El área del rectángulo es: ${area}`);

// --- Ejercicio 7: Calcular el residuo de una división usando % ---
console.log("\n--- Ejercicio 7 ---");
let dividendo = 10;
let divisor = 3;
let residuo = dividendo % divisor;
console.log(`El residuo es: ${residuo}`);

// --- Ejercicio 8: Incrementar una variable con ++ ---
console.log("\n--- Ejercicio 8 ---");
let contador = 0;
contador++;
console.log(contador);

// --- Ejercicio 9: Comparar dos números usando operadores ---
console.log("\n--- Ejercicio 9 ---");
let num1 = 10;
let num2 = 20;
console.log(num1 > num2);  // false
console.log(num1 < num2);  // true
console.log(num1 == num2); // false

// --- Ejercicio 10: Evaluar si un número es mayor que 10 ---
console.log("\n--- Ejercicio 10 ---");
let valor = 15;
console.log(valor > 10);

// --- Ejercicio 11: Determinar si un número es par o impar ---
console.log("\n--- Ejercicio 11 ---");
let numeroEvaluar = 8;
if (numeroEvaluar % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// --- Ejercicio 12: Verificar si una persona es mayor de edad ---
console.log("\n--- Ejercicio 12 ---");
let edadPersona = 19;
if (edadPersona >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// --- Ejercicio 13: Comparar dos números usando if...else ---
console.log("\n--- Ejercicio 13 ---");
let x = 50;
let y = 30;
if (x > y) {
    console.log("x es mayor que y");
} else if (x < y) {
    console.log("x es menor que y");
} else {
    console.log("x y y son iguales");
}

// --- Ejercicio 14: Clasificar una nota (0–20) ---
console.log("\n--- Ejercicio 14 ---");
let nota = 14;
if (nota >= 11 && nota <= 20) {
    console.log("Aprobado");
} else if (nota >= 0 && nota < 11) {
    console.log("Desaprobado");
} else {
    console.log("Nota no válida");
}

// --- Ejercicio 15: Usar switch para mostrar el día de la semana ---
console.log("\n--- Ejercicio 15 ---");
let dia = 3;
switch (dia) {
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miércoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sábado"); break;
    case 7: console.log("Domingo"); break;
    default: console.log("Número de día inválido");
}

// --- Ejercicio 16: Imprimir números del 1 al 10 con for ---
console.log("\n--- Ejercicio 16 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// --- Ejercicio 17: Sumar los números del 1 al 100 ---
console.log("\n--- Ejercicio 17 ---");
let sumaTotal = 0;
for (let i = 1; i <= 100; i++) {
    sumaTotal += i;
}
console.log(`La suma del 1 al 100 es: ${sumaTotal}`);

// --- Ejercicio 18: Mostrar la tabla de multiplicar de un número ---
console.log("\n--- Ejercicio 18 ---");
let numeroTabla = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
}

// --- Ejercicio 19: Contar del 10 al 1 usando while ---
console.log("\n--- Ejercicio 19 ---");
let cuentaRegresiva = 10;
while (cuentaRegresiva >= 1) {
    console.log(cuentaRegresiva);
    cuentaRegresiva--;
}

// --- Ejercicio 20: Recorrer un arreglo e imprimir sus elementos ---
console.log("\n--- Ejercicio 20 ---");
let equipos = ["Indoamerica", "Unión Porvenir Coya", "Lamay Ccoscco"];
for (let i = 0; i < equipos.length; i++) {
    console.log(equipos[i]);
}
