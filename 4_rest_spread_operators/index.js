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

// _________________ Nivel 2 ___________________
/* Ejercicio 3: Copiando objetos con Spread: Crea un objeto 'objeto1'. Luego crea
un segundo objeto, 'objeto2', que sea una copia de 'objeto1' utilizando el operador
spread. Cambia una propiedad de 'objeto2' y comprueba que 'objeto1' no ha cambiado.*/

let objeto1 = {
  nombre : "Claudia",
  apellido : "Amprimo"
}
let objeto2 = {...objeto1}
objeto2.nombre = "Paola"
console.log(objeto1)
console.log(objeto2)

/* Ejercicio 4: Resto en Destructuring: Crea un array con varios elementos.
Utiliza destructuring y el operador resto para asignar los primeros dos elementos
a variables, y después asignar el resto de los elementos a una tercera variable.*/

let a, b, rest;
[a, b, ...rest]  = ["primero", "segundo", "tercero", "cuarto"]
console.log(rest)

// _________________ Nivel 3 ___________________
/* Ejercicio 5: Spread en Funciones: Crea una función que acepte tres argumentos.
Después, crea un array con tres elementos y llama a la función utilizando el
operador spread con esa array.*/

function llamarElementos(a,b,c) {
  return a + b + c
}
let arr = [1,2,3]
console.log(llamarElementos(...arr))

/* Ejercicio 6: Fusionando Objetos con Spread: Crea dos objetos con propiedades
distintas. Utiliza el operador spread para fusionar estos dos objetos en uno nuevo.*/

let perro1 = {
  raza : "chihuahua",
  color : "marron",
}
let perro2 = {
  ojos : "verdes",
  edad : 1
}
let miPerro = {...perro1, ...perro2}
console.log(miPerro)
