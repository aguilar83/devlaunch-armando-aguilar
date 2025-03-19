/* 
El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
En un partido celebrado el 22/11/23 a las 20:30, el equipo local de Argentina
se enfrento al equipo visitante Brasil. El resultado final fue 1-0
indicando a Argentina como el equipo ganador.
*/

const eventName = 'Eliminatorias Sudamericanas'
console.log(`Torneo:${eventName}`)

const day = 22
const month = 11
const year = 2023

const date = `${day}/${month}/${year}`
console.log(date)


const hour = 20
const minutes = 30 
const formatHour = hour - 12
const formatTime = `${formatHour}:${minutes}PM`
const time = `${hour}:${minutes}`

console.log(formatTime)
console.log(time)

const localTeam = 'Brasil'
const awayTeam = 'Argentina'
 
const localTeamScore = 1
const awayTeamScore = 0


const score = `${localTeamScore}-${awayTeamScore}`
console.log(score)

