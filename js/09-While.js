"use strict"
//WHILE

var year = 2023;

while(year <= 2050 ){
 console.log("Estamos en el futuro")
    if (year == 2050)
        {
            alert("Es el año 2050 wow!");
            break; //CORTA LE EJECUCION DEL BUCLE.
        }
        year ++;
}

//DO WHILE

var years = 1000
do {
    years --;
    console.log("years es igual a: "+years);
}
while (years != 1)