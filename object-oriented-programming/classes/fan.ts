/* 
Cuando se trata de ventiladores a menudo presentan caracteristicas distintivas como configuraciones de velocidad, tamaño, potencia medida en vatios o caballos de fuerza, tipo y color.

Para manejar y modificar adecuadamnete las caracteristicas de un ventilador, es util organizarlas en un sistema de clases. De esta manera, se obtiene una estructura clara para trabajar con las propiedades del ventilador, facilitando la compresion, reutilizacion y mantenimiento del codigo.

Para abordar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador.
Esta clase incluira un constructor para inicilaizar dichos atributos y metodos como getters y setters para acceder y modificarlos segun sea necesario.

Al implementar esta estrcutura de clase, podremos represetar y gestionar de manera eficiente las caracterisicas de los ventiladores en nuestro sistema.

Esta clase esta diseñada para proporcionar todas las caracteristicas esenciales del ventilador en el momento de su creacion.

*/


type FanSize = 'small'|'medium'|'large'
type FanColor = 'white'|'black'|'gray'
type FanSpeed = 0|1|2|3

class Fan {
  public speed: FanSpeed

  constructor(
   public type: string,
   public size: FanSize,
   public color: FanColor
 ){
  this.type = type,
  this.size = size,
  this.color = color,
  this.speed = 0
 }

 public setType (type: string) {
  this.type = type
 }

 public getType () {
  return this.type
 }
  
 public setSize (size : FanSize) {
  this.size = size
 }

 public getSize () {
  return this.size
 }
 public setColor (color: FanColor) {
  this.color = color
 }
  
 public getColor () {
 return this.color
 }

 public setSpeed (speed: FanSpeed) {
 this.speed = speed
}
    
 public getSpeed () {
 return this.speed

}

}

const f1 = new Fan ('Sony', 'large','white')

f1.setType('Samsung')
f1.setSize('small')
f1.setColor('black')
f1.setSpeed(3)

console.log(f1.type)
console.log(f1.size)
console.log(f1.color)
console.log(f1.speed)

