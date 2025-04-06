/* 
El programa solicita al usuario su edad con prompt-sync, la convierte en numero 
y utiliza el ternary operator para clasificar:

0 -2 años: "You are a Baby"
3 - 13 años: "You are a child"
14 - 17 años: "You are a teenager"
18 - 29 años" "You are a young adult"
30 - 60 años: "You are an adult"
Mas de 60 años: "You are an elderly"

Si la edad es menor  0, muestra: "The institution does not support your age, pleae try again"

*/

const prompt = require('prompt-sync')()

const age = parseInt(prompt('Type your age: '))

const message = (age >= 0 && age <= 2)
 ? 'You are a Baby'
 : (age >= 3 && age <= 13)
  ? 'You are a Child'
  : (age >= 14 && age <= 17)
    ? 'You are a Teenager'
    : (age >= 18 && age <= 29)
     ? 'You are a Young Adult'
     : (age >= 30 && age <= 60)
      ? 'You are an Adult'
      : (age > 60)
       ? 'You are an Elderly'
       : null

     console.log(message ? message : 'The institution does not support your age, please try again' )