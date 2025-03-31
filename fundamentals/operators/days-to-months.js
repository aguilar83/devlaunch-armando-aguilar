/* Escribe un programa en JavaScript que solicite al usuario ingresar el
numero de dias y calcule el numero equivalente de meses y dias restantes,
considerando que un mes es de 30 dias.

Este programa utiliza modulo prompt-sync para recibir interactivamente 
la entrada del usuario. Desdpues de calcular la cantidad de meses y dias restantes 
segun la entrada, el programa muestra un mensaje al usuario indicando el equivalente
en meses y dias restantes.

Como pista, puedes usar Math.flow() para redondear el resultado a un numero entero.

Si el usuario ingresa 100, la salida sera: 100 days are 3 months and 10 days.

Nota % se utiliza para poner el residuo o remainder de una division
*/


const prompt = require('prompt-sync')()

const Days = parseInt(prompt('Number of Days? '))
const DAYS_PER_MONTH = 30 
const months = Math.floor(Days/ DAYS_PER_MONTH)

const daysLeft = Days % DAYS_PER_MONTH


console.log(`${Days} days are ${months} months and ${daysLeft} days.`)


