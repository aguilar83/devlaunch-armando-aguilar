/* Voy al Super mercado GreenCenter para hacer mis compras habituales y 
planeo comprar manzanas y naranjas.
Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
veo que 3 cajeros estan trabajando, asi que me preparo para pagar.
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y recibo $50 de cambio. */


const supermarket = 'GreenCenter' 

const fruit1 = 'Manzanas'
const fruit2 = 'Naranjas'
const areBananasAvailable = false
const areGrapesAvailable = false

const cashiers = '3'

const totalBill = 100
const cashInWallet = 150
const change = cashInWallet - totalBill

console.log (`
    Tienda : ${supermarket}\n
    Mi lista : ${fruit1} y ${fruit2}\n
    Cajas : Hay ${cashiers} trabajando\n
    Mi total: $${totalBill}
    Mi pago : $${cashInWallet}
    Cambio: $${cashInWallet-totalBill}\n
    `)