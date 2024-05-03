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
let pares = numeros.filter((num) => num % 2 === 0)
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

// _________________ Nivel 2 ___________________
/* Ejercicio 5: Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]",
crea una función en una sola línea que haga lo siguiente:

Filtra los números mayores o iguales a 10.
Multiplica cada número filtrado por 2.
Calcula la suma de los números filtrados y multiplicados por 2.
La función debe devolver el resultado de la suma.*/

let arrayNumeros = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]
function calculadora(){
  return arrayNumeros.filter((num) => num >= 10).map((num) => num * 2).reduce((a,b) => a + b)
}
console.log(calculadora())

// _________________ Nivel 3 ___________________
/* Ejercicio 6: Every / Some: Usa every y some para determinar si todos o algunos
de los elementos del array [11, 12, 13, 14] son ​​mayores que 10, respectivamente*/

let arrayNumeros2 = [11, 12, 13, 14]
function mayorDeDiez(num){
  return num > 10
}
console.log(arrayNumeros2.every(mayorDeDiez))
console.log(arrayNumeros2.some(mayorDeDiez))
