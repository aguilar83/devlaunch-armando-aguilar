/* 
Imagina desarrolar un programa para calcular el promedio de calificacion de estudiantes
en una escuela. Como parte de este desafio, primero configuras el entorno para recibir
 entradas del usuario, permitiendo que ingresen tres notas.

 Luego, procesas estos datos para calcular el promedio de manera precisa.

 Finalmente, presentas el resultado formateado como maximo dos decimales para asegurar una lectura clara.
 
Si el usuario ingresa las calificaciones 80, 70 y 90, la salida sera de: 80.
*/

const prompt = require('prompt-sync')()

const studentName =prompt('Student Name? ')
const gradeA = parseInt(prompt('grade A? '))
const gradeB = parseInt(prompt('grade B? '))
const gradeC = parseInt(prompt('grade C? '))

const GRADES_AMOUNT = 3
const maxDigits = 2
const average = ((gradeA+gradeB+gradeC)/GRADES_AMOUNT)

console.log(`
    Annual Grade Average
    -----------------------------\n
    Student Name: ${studentName}:
    Grade A: ${gradeA}
    Grade B: ${gradeB}
    Grade C: ${gradeC}\n
    Final Average: ${average.toFixed(maxDigits)}%`)

