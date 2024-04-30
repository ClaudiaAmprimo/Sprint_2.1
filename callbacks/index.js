// _________________ Nivel 1 ___________________
/* Ejercicio 1: Callback básico: Escribe una función llamada procesar que acepte
dos parámetros: un número y una función de callback. La función procesar debe
invocar la función de callback, pasando el número como parámetro.*/

function procesar(num, callback) {
  return callback(num)
}
function callback(numero){
  return `El numero es: ${numero}`
}
let result = procesar(4,callback)
console.log(result)

/* Ejercicio 2: Callbacks con operaciones matemáticas: Escribe una función
calculadora que acepte tres parámetros: dos números y una función de callback.
La función calculadora debe invocar la función de callback con los dos números
como parámetros. Luego, llama calculadora con una función que realice la suma de
los dos números.*/

function calculadora(num1, num2, sumar) {
  return sumar(num1, num2);
}
function sumar(a,b) {
  return a + b
}
let resultado = calculadora(3,3,sumar)
console.log(resultado)
