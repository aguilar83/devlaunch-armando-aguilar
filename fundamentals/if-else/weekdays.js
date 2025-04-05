/* El programa solicita al usuario un numero del 1 al 7 mediante prompt sync.
Utiliza una declaracion switch para mostrar una el dia de la semana correspondiente o 
"Invalid day" si el numero no es valido. Ejemplo: 3 muestra "wednesday",
8 muestra "Invalid Day". Ideal para identificar dias en programas simples.
*/

const prompt = require('prompt-sync')()
let dayNumber = parseInt(prompt('Day number?'))


switch(dayNumber) {
  case 1: 
  console.log('Monday');
   break;
  case 2:
    console.log('Tuesday');
   break;
  case 3:
    console.log('Wednesday');
   break;
  case 4:
    console.log('Thursday');
   break;
  case 5:
    console.log('Friday');
   break;
  case 6:
    console.log('Saturday');
   break;
  case 7:
    console.log('Sunday');
   break;
  default:
    console.log('Invalid Day');
    break;   
}