// VARIABLES
let variableSinValor ;

let booleano1 = true ;
let booleano2 = true ;

const PI = 3.14 ;
const TAU = 2 * PI ;

//BOOLEANOS
let booleanoAnd = booleano1 && booleano2 ;
let booleanoNot = !booleano1 ;
let booleanoMix0;
booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2)) ;

//OPERADORES
let incrementarDesp = 2 ;
let resultadoDesp = incrementoDesp++ ;

let incrementarAntes = 2;
let resultadoAntes = ++incrementoAntes ;

//BUCLES
let contarHasta10_2 = 0 ;
for (let i = 0; i < 10; i++) {
    contarHasta10_2++
}

let postI = 0 ;
let postJ = 0 ;

for (let i = 0; i < 11; i++) {
    postI = postI + postJ++ ;
}

let sumaPares = 0 ;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i ;
    }
}

//PROYECTO INDIVIDUAL//
//Variables
let variableValorNumerico = 7 ;

const MiNombre = 'Darío' ;

const MiNumeroFav = 28 ;

//Booleanos
let booleanoOr = booleano1 || booleano2 ;

let booleanoMix1;
booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav) ;

let seisNoEsNueve = 6 !== 9 ;

let booleanoMix2;
booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumFav * TAU) ;

//Operadores
let valorSuma = MiNumeroFav + variableValorNumerico ;

let valorResta = MiNumeroFav - variableValorNumerico ;

let valorMultiplicación = MiNumeroFav * variableValorNumerico ;

let valorDivisión = MiNumeroFav / 3 ;

//Bucles
let contarHasta10 = 0;
while (contarHasta10 < 10) {
  contarHasta10++;
}

let preI = 0 ;
let preJ = 0 ;
for (let i = 0; i < 11; i++) {
    preI += ++preJ;
}

let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += +i;
  }
}
