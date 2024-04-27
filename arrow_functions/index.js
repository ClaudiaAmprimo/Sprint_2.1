// Ejercicio 1: Conversión de funciones: Tienes una función add que acepta dos
// parámetros y devuelve su suma. Conviértela en una función de flecha.
// Por ejemplo:function add(a, b) {return a + b;}.

let add = (a,b) => a + b;
console.log(add(2,4))

// Ejercicio 2: Función de flecha sin parámetros: Crea una función de flecha llamada
// randomNumber que no necesite parámetros y que devuelva un número aleatorio entre 0 y 100.

let randomNumber = () => Math.floor(Math.random() * 101)
console.log(randomNumber())

// Ejercicio 3: Uso de 'this' en las funciones de flecha: Crea una clase person que
// tenga una propiedad name y una función greet que utilice una función de flecha.
// La función debe imprimir un saludo que incluya el nombre de la persona.
// Por ejemplo: console.log(Hola, ${this.name});.