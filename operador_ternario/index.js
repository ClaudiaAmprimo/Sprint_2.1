// _________________ Nivel 1 ___________________
/* Ejercicio 1: Operador ternario básico: Escribe una función puedeConducir que
acepte la edad como parámetro y utilice el operador ternario para determinar
si el usuario puede conducir. Si la edad es 18 o más, debe devolver
'Puedes conducir'. Si no, debe devolver 'No puedes conducir'.*/

function puedeConducir(age){
  return age >= 18 ? "Puede conducir" : "No puede conducir"
}
console.log(puedeConducir(21))

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
console.log(esMayor(2,3))
