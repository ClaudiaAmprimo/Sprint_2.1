// _________________ Nivel 1 ___________________
/* Ejercicio 1: forEach: Tiene un array de nombres. Utiliza forEach para imprimir
cada nombre en la consola: let nombres = ['Anna', 'Bernat', 'Clara'];*/

let nombres = ['Anna', 'Bernat', 'Clara'];
nombres.forEach((nombre) => console.log(nombre))

/* Ejercicio 2: for-of: Tiene un array de nombres. Utiliza un bucle for-of para
imprimir cada nombre en la consola: let noms = ['Anna', 'Bernat', 'Clara'];*/

let noms = ['Anna', 'Bernat', 'Clara'];
for (let nom of noms) {
  console.log(nom)
}

/* Ejercicio 3: filtro: Tiene un array de números. Use filtro para crear una
nueva array que sólo contenga los números pares. let numeros = [1, 2, 3, 4, 5, 6];*/

let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter((num) => num % 2 === 0);
  console.log(pares)

// _________________ Nivel 2 ___________________
/* Ejercicio 4: for-in: Tiene un objeto con pares clave-valor: let obj =
{ nombre: Ola, edad: 25, ciudad: 'Barcelona' }; Utiliza un bucle for-in para
imprimir en la consola cada clave y su correspondiente valor.*/

let obj = { nombre: "Ola", edad: 25, ciudad: 'Barcelona' };
  for (let value in obj) {
    console.log(`${value}: ${obj[value]}`)
  }

/* Ejercicio 5: for-of con break: Tiene un array de números. Utiliza un bucle
for-of para imprimir en la consola los números hasta encontrar el número 5,
entonces detiene el bucle: let numeros = [1, 2, 3, 4, 5, 6];*/

let numbers = [1, 2, 3, 4, 5, 6];
for (let number of numbers ) {
  console.log(number)
  if (number === 5){
    break
  }
}

// _________________ Nivel 3 ___________________
/* Ejercicio 6: for-of con index: Utiliza un bucle for-of para imprimir en la
consola cada elemento del array y su posición (index):
let noms = ['Anna', 'Bernat', 'Clara']*/

let names = ['Anna', 'Bernat', 'Clara'];
for (let name of names) {
  console.log(`${names.indexOf(name)}: ${name}`)
}
