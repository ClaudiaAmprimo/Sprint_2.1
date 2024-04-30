// _________________ Nivel 1 ___________________
/* Ejercicio 1: Operador Spread en Arrays: Crea dos arrays, array1 y array2.
Use el operador spread para crear una tercera array que contenga todos los
elementos de array1 y array2.*/

array1 = ["Hola", "mi", "nombre"]
array2 = ["es", "Claudia"]
array3 = [...array1, ...array2]

console.log(array3)

/* Ejercicio 2: Operador Rest en Funciones: Crea una función 'suma' que utilice
el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.*/

function suma(...numeros) {
  let sum = 0
  for (let numero of numeros){
    sum += numero
  }
  return sum
}
console.log(suma(5,10,15,20))
