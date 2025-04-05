/* Escribe un programa simple en JavaScript que evalue el valor de una variable llamada 'n'.
Verificando si el numero es positivo, negativo o cero, y muestre un mensaje correspondiente
basado en la siguiente evaluacion:

Si el numero es mayor a 0, imprime 'Positivo'
Si el numero es menor que 0, imprime 'Negativo'
si el numero es exactamente 0, imprime 'Cero'

Si la variable no es un numero, imprime un mensaje de error: Por favor, introduce un numero.
*/

const prompt = require('prompt-sync')()
const n = parseInt(prompt('Digite un numero: '))

if (n > 0) {
  console.log("Positivo")
} else if (n < 0) {
  console.log('Negativo')
} else if (n === 0){
  console.log('Cero')
} else {
  console.log('Por favor, introduce un numero.')
}


