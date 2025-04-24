/* 
Un triangulo, una froma geometrica funda,ental, es un poligono caracterizado por tener tres lados y tres verticas. De acuerdo con el teorema de desigualdad del triangulo, en cualquier triangulo valido, la suma de las longitudes de dos lados cualquiera debe ser mayor que la longitud del tercer lado. 

Tu tarea es crear un objeto que represente un triangulo.

Este objeto debe tener tres propiedades, cada una correspondiente a uno de sus lados. 

Ademas, se requiere una funcion para validar si los dos lados cumplen con el teorema de la desigualdad del triangulo.

Por ejemplo, considera un triangulo con longitudes de lados: a = 7, b = 10 y c = 5.

Para determinar si estos lados forman un triangulo valido, evaluamos si la suma de cada par de lados es mayor que la longitud del lado restante. 

En este caso, verificamos si (b + C) > a, (a + c) > b y (a + b) > c. 
*/

interface Triangle {
  a: number
  b: number
  c: number
}

const t1: Triangle = {
 a: 7,
 b: 10,
 c: 5
}

const t2: Triangle = {
  a: 2,
  b: 3,
  c: 6
}

function isValidTriangle ({a, b, c} : Triangle) {
  return ((b + c ) > a && (a + c) > b && (a + b) > c)
  
}

console.log(isValidTriangle(t1))
console.log(isValidTriangle(t2))