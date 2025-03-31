/* Escribe un programa sencillo en JavaScript que calcule y muestre el Indice de Masa Corporal (IMC)
de un usuario. El programa debe solicitar su nombre, altura en metros y peso en KG.

Despues de calcular el IMC, el progama debe mostar un mensaje al usuario que incluya su nombre y el valor de su IMC.

Calcula el IMC utilizando la formula:

IMC= weight/height^2

Nombre: John
Altura : 1.75
Peso: 70

La salida sera: Hi John your BMI is ~22.86
*/

const prompt = require('prompt-sync')()

const name = prompt('Whats your name? ')
const height = parseFloat(prompt('Whats your height in meters? '))
const weight = parseFloat(prompt('Whats your weight in KG? ')) 
const imc = weight / Math.pow(height, 2)

console.log(`Body Mass Index Calculator\n
    Patient ${name}
    Weight: ${weight} KG
    Height: ${height} M\n
    BMI:   ~${imc.toFixed(2)}`)
