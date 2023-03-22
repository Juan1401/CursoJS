"use strict"

//OPERADORES Basicos
var numero1 = 1;
var numero2 = 12;
var operacion = numero1 * numero2; //se pueden usar los operadores + , - , * , / , %

alert("El resultado de la operacion: "+operacion);

//Tipos de Datos

var numero_entero = 44;
var cadena_texto = "Hola que tal";
console.log(cadena_texto);
var booleano_true_o_false = true;


//FUNCIONES
var numero_falso ="33";  //no lo muestra como un numero si no comouna cadena de texto debido a que esta entre comillas
Number();
console.log( Number(numero_falso)+7);   //La funcion convirtio el cadena de texto 33 en numero por la funcion y fue posible la suma 

String();
console.log(  String(numero1)+numero_entero  ) //convirtio el nunero1  en un string y por eso cuando se suma con la otra variable la concatena

//TIPOS DE DATOS
//ME DICE QUE TIPO DE DATOS ES MI VARIABLE
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof booleano_true_o_false);