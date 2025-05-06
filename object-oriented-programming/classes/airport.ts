/* 
El objetivo es crear una clase Airport que modele las caracteristicas y operaciones de un aeropuertp de forma mas avanzada. 

Cada aeropuerto tiene:
Un nombre.
Una Ubicacion.
Una pista de aterrizaje (runway).
Un nivel de trafico aereo (bajo, medio, alto)
La clase debe incluir:

Un metodo changeTrafficLevel que permite cambiar el nivel de trafico aereo.
Un metodo emergencyLanding que cierre la pista de aterrizaje y marque el nivel de trafico como alto.
Un metodo displayInfo que muestre el nombre del aeropuerto, la unicacion y el estado actual de la pista y el nivel de trafico.
Crea una instancia de la clase de Airport, y demuestra el uso de metodos con distintas operaciones.
*/

type trafficLevel = 'low'|'medium'|'heavy'

class Airport {
    
  public _name: string
  public _location: string
  public _runwayStatus: boolean
  public _trafficLevel: trafficLevel
  
  constructor (name: string, location: string){
  this._name = name 
  this._location = location
  this._runwayStatus = true
  this._trafficLevel = "low"
  }

  get runwayStatus(): boolean {
  return this.runwayStatus 
  }

  set runwayStatus(status: boolean) {
  this._runwayStatus = status
  }
  
  get trafficLevel(): trafficLevel {
  return this.trafficLevel
 }
  
  set trafficLevel (level: trafficLevel) {
  this._trafficLevel = level
}

 changeTrafficLevel (level: trafficLevel): void {
  this.trafficLevel = level
  console.log(`El nivel de trafico se ha cambiado a ${level} en el aeropuerto ${this._name}`)

}

emergencyLanding():void {
  this.runwayStatus = false
  this.trafficLevel = 'heavy'
  console.log(`Aterrizaje de emergencia en Aeropuerto ${this._name}).La pista esta cerrada y el nivel de trafico ${this.trafficLevel}`)

}

 displayInfo (): void {
  console.log(`Nombre: ${this._name}`)
  console.log(`Ubicacion: ${this._location}`)
  console.log(`Estado de la pista: ${this.runwayStatus}`)
  console.log(this.trafficLevel)
 }

}

const Airport1 = new Airport ('Juan Santamaria', 'San Jose')

Airport1.displayInfo()
Airport1.changeTrafficLevel('medium')
Airport1.displayInfo()
Airport1.emergencyLanding()
Airport1.displayInfo()