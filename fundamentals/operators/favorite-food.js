/* Escribe un programa simple en JavaScript que examine las preferencias culinarias
de tres personas: MAria, Pepe y Malvern. El programa analiza tres condiciones:

Comparte Maria la misma comida favorita que tanto Pepe como Malvern?
La comida favoriuta de Maria coincide ya sea con la de Pepe p con la de Malvern?
La preferencia de Maria es diferente tanto de la de Pepe como de la de Malvern?

Recuerda pedir los valores al usuario para poder elegit diferentes combinaciones, 
ejemplo: Si la comida favorita de Maria es la PIZZA, la de Pepe es el POLLO
 y la de Malvern es el PESCADO.

 Los resultados de estas comparaciones se muestran luego, ofreciendo informacion
 sobre las similutudes y diferencias en las procedencias culinarias de los tres individuos.

 La salida del programa sera:

 Does Maria share de same favorite food as both Pepe and Malvern? : False
 Does Marias's favorite food match either Pepe's or Malverns's?: False
 Does Maria preference differ from both Pepe's and Malverns? : True */

 const prompt = require('prompt-sync')()

 const favoriteFoodMaria = prompt('What is your favorite food Maria? ')
 const favoriteFoodPepe = prompt('What is your favorite food Pepe? ')
 const favoriteFoodMalvern = prompt('What is your favorite food Malvern? ')

 const isMariaAndPepeSameFavFood = favoriteFoodMaria === favoriteFoodPepe
 const isMariaAndMalvernSameFavFood = favoriteFoodMaria === favoriteFoodMalvern
 
 const allMatch = isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood
 const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
 const noMatch = !isMariaAndPepeSameFavFood && !isMariaAndMalvernSameFavFood 



 console.log(`Does Maria's share de same favorite food as both Pepe's and Malvern's? : ${allMatch}`)
 console.log(`Does Marias's favorite food match either Pepe's or Malverns's?         : ${someMatch}`)
 console.log(`Does Maria's preference differ from both Pepe's and Malverns?          : ${noMatch}`)