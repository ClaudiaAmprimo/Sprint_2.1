// _________________ Nivel 1 ___________________
/* Ejercicio 1: Operador ternario básico: Escribe una función puedeConducir que
acepte la edad como parámetro y utilice el operador ternario para determinar
si el usuario puede conducir. Si la edad es 18 o más, debe devolver
'Puedes conducir'. Si no, debe devolver 'No puedes conducir'.*/

function puedeConducir(age){
  return age >= 18 ? "Puede conducir" : "No puede conducir"
}
console.log(puedeConducir(10))

/* Ejercicio 2: Uso con operadores de comparación: Escribe una expresión que utilice
el operador ternario para determinar cuál de los dos números dados (num1 y num2)
es mayor. Si num1 es mayor, devuelve 'num1 es mayor'. Si no, devuelve 'num2 es mayor'.*/

function esMayor(num1, num2) {
  if (num1 !== num2) {
    return num1 > num2 ? "num1 es mayor" : "num2 es mayor"
  } else {
    return "son iguales"
  }
}
console.log(esMayor(3,1))

// _________________ Nivel 2 ___________________
/* Ejercicio 3: Uso enlazado de operadores ternarios: Escribe una expresión que
utilice enlaces de operadores ternarios para determinar si un número es positivo,
negativo o cero.*/

function checkNumber(num){
  return num > 0 ? console.log("El numero es positivo") :
  num < 0 ? console.log("El numero es negativo") : console.log("El numero es cero")
};
checkNumber(0)

/*Operador ternario con funciones: Crea una función encontrarMaximo que acepte
tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.*/

function encontrarMaximo(a,b,c){
  return a > b && a > c ? console.log(`${a} es mayor`) :
    b > a && b > c ? console.log(`${b} es mayor`) : console.log(`${c} es mayor`)
}
encontrarMaximo(30,20,54)

// _________________ Nivel 3 ___________________
/* Ejercicio 4: Operador ternario dentro de un bucle: Escribe una función
parOImpar que acepte un array de números y utilice un bucle para recorrer el
array. Dentro del bucle, utiliza el operador ternario para determinar si cada
número es par o impar.*/

let numeros = [1,2,3,4,5]
function parOImpar(numeros) {
    numeros.forEach(num => {
      console.log(num % 2 === 0 ? `El numero ${num} es par` : `El numero ${num} es impar`)
    });
}
parOImpar(numeros)
