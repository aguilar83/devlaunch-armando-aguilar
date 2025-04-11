/* El proveedor principal de servicios de telefonia movil en la ciudad esta introduciendo una oferta promocional basada tanto en el monto de recarga realizado por sus clientes como en la duracion de si suscripcion con la compañia. Para ser elegible para la promocion, los clientes deben recargar un minimo de $20 y un maximo de $80 y haber estado suscritos durante al menos un año.

En la promocion Super Saver, los clientes pueden disfrutar de un monto de recarga duplicado si su recarga es inferior a $38 y han estado afiliados al servico tres años o menos. 

Por otro lado, la promocion MegaRecharge esta dirigida a los clientes que han estado suscritos por mas de tres años, ofreciendoles un monto de recarga triplicado independientemente del monto recargado.

Tu tarea es desarrolar un programa que tome como entrada el nombre del cliente, el monto de la recarga y la duracion de su suscripcion, y determine si la promocion les aplica y calcule el monto total de recarga incluyendo la promocion. 
*/


const prompt = require('prompt-sync')()
MIN_MONTHS_DURATION = 12
const MIN_RECHARGE_AMOUNT = 20
const MAX_RECHARGE_AMOUNT = 80
const MEGA_PROMO_MIN_DURATION = 36
const SUPER_PROMO_MIN_AMOUNT = 38
const MEGA_PROMO_MULTIPLIER = 3
const SUPER_PROMO_MULTIPLIER =  2

function calculateRecharge(amount, duration){
  if (duration < MIN_MONTHS_DURATION) return amount

    let multiplier = 1 

   if (amount > MIN_RECHARGE_AMOUNT){
     if (duration >= MEGA_PROMO_MIN_DURATION) {
      multiplier = MEGA_PROMO_MULTIPLIER
     } else if(
      amount >= SUPER_PROMO_MIN_AMOUNT && 
      amount <= MAX_RECHARGE_AMOUNT
     ) {
      multiplier = SUPER_PROMO_MULTIPLIER
     } 
   }
   return amount * multiplier

}

function main() {  
  const name = prompt('Whats your name? ')
  const amount = parseInt(prompt('Enter Recharge amount $: '))
  const duration = parseInt(prompt('How many months has been customer?: '))
  const recharge = calculateRecharge(amount, duration)
  const promo = recharge - amount

  console.log(`
    THANKS ${name}
    RECHARGE $: ${recharge}
    PROMO: ${promo}
    `)
} 


main()