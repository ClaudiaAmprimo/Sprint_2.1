// _________________ Nivel 1 ___________________
/* Ejercicio 1: Conversión de funciones: Tienes una función add que acepta dos
parámetros y devuelve su suma. Conviértela en una función de flecha.
Por ejemplo:function add(a, b) {return a + b;}.*/

let add = (a,b) => a + b;
console.log(add(2,4))

/* Ejercicio 2: Función de flecha sin parámetros: Crea una función de flecha llamada
randomNumber que no necesite parámetros y que devuelva un número aleatorio entre 0 y 100.*/

let randomNumber = () => Math.floor(Math.random() * 101)
console.log(randomNumber())

/* Ejercicio 3: Uso de 'this' en las funciones de flecha: Crea una clase person que
tenga una propiedad name y una función greet que utilice una función de flecha.
La función debe imprimir un saludo que incluya el nombre de la persona.
Por ejemplo: console.log(Hola, ${this.name});.*/

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => `Hola, ${this.name}`
}
const person = new Person("Claudia")
console.log(person.greet())

// _________________ Nivel 2 ___________________
/* Ejercicio 4: Función de flecha dentro de un loop: Crea una función llamada
printNumbers que acepte un array de números y utilice un loop for para imprimir
cada número en la consola utilizando una función de flecha.*/

let numeros = [10, 20, 30, 40, 50]
function printNumbers(num) {
  num.forEach(num => console.log(num));
  }
printNumbers(numeros)

// _________________ Nivel 3 ___________________
/* Ejercicio 5: Función de flecha con 'setTimeout': Crea una función de flecha
que imprima un mensaje en la consola después de esperar 3 segundos.*/

setTimeout(() => {console.log("Han pasado 3 segundos")}, 3000);
