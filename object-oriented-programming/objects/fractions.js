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

const createFraction = (numerator, denominator) => {
    return {
        numerator,
        denominator
    }
}

const add = (fraction1, fraction2) => {
    const numerator = (fraction1.numerator * fraction2.denominator) + (fraction1.denominator * fraction2.numerator)
    const denominator = fraction1.denominator * fraction2.denominator

    return createFraction(numerator, denominator)
}

const subtract = (fraction1, fraction2) => {
    const numerator = (fraction1.numerator * fraction2.denominator) - (fraction1.denominator * fraction2.numerator)
    const denominator = fraction1.denominator * fraction2.denominator

    return createFraction(numerator, denominator)
}

const multiply = () => {
    const numerator = fraction1.numerator * fraction2.numerator
    const denominator = fraction1.denominator * fraction2.denominator

    return createFraction(numerator, denominator)
}

const divide = () => {
    const numerator = fraction1.numerator * fraction2.denominator
    const denominator = fraction1.denominator * fraction2.numerator

    return createFraction(numerator, denominator)
}

const createFractionWithFunctions = (numerator, denominator) => {
    const f1 = createFraction(numerator, denominator)

    return {
        ...f1,
        add: (fraction2) => add(f1, fraction2),
        subtract: (fraction2) => subtract(f1, fraction2),
        multiply: (fraction2) => multiply(f1, fraction2),
        divide: (fraction2) => divide(f1, fraction2),
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