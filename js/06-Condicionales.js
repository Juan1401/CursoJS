//Condicional IF
//SI A = B entonces ejecuta algo

/*

var edad1 = 21;
var edad2 = 12;
//si pasa esto 
if(edad1 > edad2){
//Ejcuta esto
    console.log("Edad 1 es mayor que Edad2");

}
else {

    console.log("La edad1 es menor que 2")
}
*/

var edad = 35;
var Nombre = "Juan Jose"
/*OPERADORES RELACIONELES
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: = 
    Distinto: !
*/

if (edad >= 18 ){
    console.log(Nombre +" tiene " + edad + " años, es mayor de edad" );

    //if anidado
    if(edad <= 33){
    console.log(Nombre +  "Todavia eres milenial");
    }
    else if (edad >=70)
    {
        console.log("Eres anciano");
    }
    else
    {
        console.log("Ya no eres Milenial");
    }
}
else
{
    console.log(Nombre + "es menor de edad");
}

/*
//OPERADORES LOGICOS
AND(Y) : && 
OR(O) : ||
NEGACION : !
*/

//NEGACION
var year = 2018;
if (year != 2016){
    console.log("El año no es 2016, realmente es: "+year);
}

//AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else {
    console.log("Estamos en la era postmoderna");
}
//OR

if (year == 2028 || (year >= 2018 && year == 2028) ){  //Con el parentesis se prioriza los instrucciones que este dentro de el
    console.log("El años termina en 8");
}
else{
    console.log("AÑO NO REGISTRADO");
}