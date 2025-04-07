/* Entrada de Fecha de Nacimiento: Se solicita al usuario que ingrese su fecha de nacimiento en el formato 
YYYY/MM/DD.

Calculo de la Edad: 
Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando el año de
 nacimiento del año actual. Tambien se verifica si ya ha pasado el cumpleaños actual, 
 para ajustar la edad si es necesario.

 Verificacion de Edad:
 Se utiliza un if-else para determinar s la persona cumple con la edad legal para beber (18 años o mas).
 Este programa permite que el proceso de verificacion de edad sea automatico y preciso, asegurando que 

 Puedes guiarte con esto: 

 const prompt = require('prompt-sync')()

 const birthdate = prompt('Whats your birthdate in format YYYY/MM/DD?');

 const birthdate = new Date(birthdate)
 const today = new Date()

 const age = today.getFullYear() - birthday.GetFullYear() // takes de age og the person.

 */

 const prompt = require('prompt-sync')()
 const birthdate = prompt(`Whats your Birthdate in format YYYY/MM/DD? `)

const today = new Date()
const birthday = new Date(birthdate)

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
  today.getMonth() > birthday.getMonth() ||
  (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
  )
  
)
if (!birthdayPassed) {
age--
}

console.log(age)

if (age >= 18){
  console.log(" Admitted ")
} else if (age < 18){
  console.log("Minor Not Admitted ")
} 