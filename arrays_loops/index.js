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
