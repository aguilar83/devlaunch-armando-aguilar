/* En este escenario, se te proporcionaran varias fracciones, y tu tarea sera realizar diversas operaciones con ellas, tales como sumas, resta, multiplicacion y division.

El objetivo es obtener el numero y el demonimador resultantes de estas operaciones.

Para lograrlo, deberas definir dos atributos: el numerador y el demonimador.

Ademas, inplementaras metodos correspondientes para cada operacion, devolviendo un objeto resultante con el numerador y el demoninador calculados.

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte del objeto como incluidos como parte de su funcional dentro del objeto mismo. 

const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)

add(fraction1 , fraction2)

const fraction3 = createFractionWithFunctions(3, 4)
const fraction4 = createFractionWithFunctions(2, 3)

fraction3.add(fraction4)

*/

interface Fraction {
    numerator: number
    denominator: number
}

type FractionOperation = (fraction2: Fraction) => Fraction


interface FractionsWithOperations extends Fraction {

    add: FractionOperation
    subtract: FractionOperation
    multiply: FractionOperation
    divide: FractionOperation
}

const createFraction = (numerator: number, denominator: number): Fraction => {
    return {
        numerator,
        denominator
    }
}

const add = (fraction1: Fraction, fraction2: Fraction) => {
    const numerator = (fraction1.numerator * fraction2.denominator) + (fraction1.denominator * fraction2.numerator)
    const denominator = fraction1.denominator * fraction2.denominator

    return createFraction(numerator, denominator)
}

const subtract = (fraction1: Fraction, fraction2: Fraction) => {
    const numerator = (fraction1.numerator * fraction2.denominator) - (fraction1.denominator * fraction2.numerator)
    const denominator = fraction1.denominator * fraction2.denominator

    return createFraction(numerator, denominator)
}

const multiply = (fraction1: Fraction, fraction2: Fraction) => {
    const numerator = fraction1.numerator * fraction2.numerator
    const denominator = fraction1.denominator * fraction2.denominator

    return createFraction(numerator, denominator)
}

const divide = (fraction1: Fraction, fraction2: Fraction) => {
    const numerator = fraction1.numerator * fraction2.denominator
    const denominator = fraction1.denominator * fraction2.numerator

    return createFraction(numerator, denominator)
}

const createFractionWithFunctions = (numerator: number, denominator: number): FractionsWithOperations => {
    const f1 = createFraction(numerator, denominator)

    return {
        ...f1,
        add: (fraction2: Fraction) => add(f1, fraction2),
        subtract: (fraction2: Fraction) => subtract(f1, fraction2),
        multiply: (fraction2: Fraction) => multiply(f1, fraction2),
        divide: (fraction2: Fraction) => divide(f1, fraction2),
    }

}


const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)
const fraction3 = createFractionWithFunctions(3, 4)
const fraction4 = createFraction(2, 3)

add(fraction1, fraction2)
subtract(fraction1, fraction2)
multiply(fraction1, fraction2)
divide(fraction1, fraction2)

console.log(add(fraction1, fraction2))
console.log(subtract(fraction1, fraction2))
console.log(multiply(fraction1, fraction2))
console.log(divide(fraction1, fraction2))
console.log(fraction3.add(fraction4))