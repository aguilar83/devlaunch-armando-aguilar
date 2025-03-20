/* El Elite Fitness Center es un un gimnasio boutique ubicado en Palo Alto, California,
que ofrece membresias por $150 al mes.
Opera de 6AM a 10PM, emplea a 10 entrenadores certificados
y cuenta con modalidades como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitness Center'
const gymType = 'Boutique'

const location = 'Palo Alto, California'

const membership = 150
const currency = '$'
const time = 'mes'

const openTime = 6
const closeTime = 22

const trainers = 10
const amenity1 = 'Sauna'
const amenity2 = 'Piscina'
const amenity3 = 'Clases Grupales'

console.log(`
    Gym: ${gymName} ${gymType}\n
    Location: ${location}\n
    Price: ${currency} ${membership}/${time}\n
    Schedule: ${openTime}AM-${closeTime -12}PM\n
    Trainers: ${trainers} Entrenadores Certificados\n
    Services: ${amenity1}, ${amenity2} & ${amenity3}\n
    `)



