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
let result2 = calculadora(3,3,sumar)
console.log(result2)

// _________________ Nivel 2 ___________________
/* Ejercicio 3: Uso de callbacks en funciones asíncronas: Escribe una función
esperarISaludar que acepte dos parámetros: un nombre y una función de callback.
La función debe esperar 2 segundos y entonces invocar la función de callback,
pasando el nombre como parámetro.*/

function esperarISaludar(nombre, saludo) {
  setTimeout(() => {
    console.log(saludo(nombre))
  }, 2000);
}
function saludo(nombre){
  return `Hola mi nombre es: ${nombre}`
}
esperarISaludar("Claudia", saludo)

/* Ejercicio 4: Callbacks con arrays: Escribe una función procesarElements que
acepte dos parámetros: un array y una función de callback. La función
procesarElements debe invocar la función de callback por cada elemento del array.*/

array = [2,4,6,8]
function procesarElements(array, callback) {
  array.forEach(number => {
    callback(number)
  });
}
function mostrarArray(number){
  console.log(`El array contiene: ${number}`)
  }

procesarElements(array, mostrarArray)

// _________________ Nivel 3 ___________________
/* Ejercicio 5: Escribe una función procesarCadena que acepte dos parámetros:
una cadena de caracteres y una función de callback. La función procesarCadena
debe convertir la cadena a mayúsculas y entonces invocar la función de callback
con la cadena transformada.*/


