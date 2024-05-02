// _________________ Nivel 1 ___________________
/* Ejercicio 1: Creación de una Promesa: Crea una promesa que se resuelva después
de 2 segundos y que devuelva la cadena de texto 'Hola, mundo'.*/

let mensaje = "Hola, mundo"
let mostrar = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mensaje)
    }, 2000);
  })
}

/* Ejercicio 2: Utilización de una Promesa: Utiliza la promesa creada en el
ejercicio anterior. Crea un .then que imprima el resultado en la consola.*/

mostrar().then((mensaje) => console.log(mensaje))

/* Ejercicio 3: Promesa con reject: Crea una promesa que se resuelva después de
2 segundos si el input es igual a 'Hola', y que la rechace si el input es
cualquier otra cosa.*/

let validacion = (message) => {
  return new Promise((resolve, reject) => {
    if (!message.includes("Hola")) {
      reject(new Error ("No existe incluye Hola"));
    } else {
      setTimeout(() => {
        resolve(message)
      }, 2000);
    }
  })
}
validacion("Hola mundo")
  .then((message) => console.log("Promesa cumplida:", message));
validacion("Hello World")
  .catch((error) => console.error(error.message))

/* Ejercicio 4: Uso de async/await: Escribe una función asíncrona que utilice la
función await para esperar el resultado de la promesa creada en el ejercicio 1,
y que después imprima este resultado en la consola.*/

async function message() {
  let asyncMessage = await mostrar();
  console.log(asyncMessage)
}
message()
