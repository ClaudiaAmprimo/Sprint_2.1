// _________________ Nivel 1 ___________________
/* Ejercicio 1: Map: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array
que contenga el cuadrado de cada número.*/

let numbers = [1, 2, 3, 4]
let cuadrado = numbers.map(function(num) {
  return num * num;
})
console.log(cuadrado)

/* Ejercicio 2: Filtero: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo
array que sólo contenga los números pares.*/

let numeros = [1, 2, 3, 4]
let pares = numeros.filter((num) => num % 2 == 0)
console.log(pares)

/* Ejercicio 3: Find: Tiene un array de números [1, 10 , 8, 11]. Use la función
find para encontrar el primer número que es mayor a 10.*/

let nums = [1, 10, 8, 11]
let find = nums.find((num) => num > 10)
console.log(find)

/* Ejercicio 4: Reducción: Tiene un array de números [13, 7, 8, 21]. Utiliza la
función reduccion para calcular la suma total de los números.*/

arrayNum = [13, 7, 8, 21]
totalSum = arrayNum.reduce(function(a,b){
  return a + b
})
console.log(totalSum)
