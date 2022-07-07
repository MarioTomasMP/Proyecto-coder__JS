
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ahora ingrese su apellido");
let salida = "Hola"+" "+nombre+" "+apellido+" "+", un gusto conocerte!";
alert(salida)

let edad = prompt(nombre+" "+apellido+" "+"¿Cuantos años tienes?");
let edadActual =prompt(nombre+" "+"¿Y en que año estamos?");
let edadTotal = (0000+edad)

console.log(edadTotal);
console.log(edadActual);

alert("Con tus datos, puedo adivinar que naciste en el año" +" "+((Number(edadActual))-(Number(edadTotal))));


let Juego1 = alert("Vamos jugar un juego de adivinanza, si obtienes 2 puntos ganas, sino te gano yo ;D");
var puntos = 0;
let puntosGanados = 1;
var puntosTotales = 0;
const continuar = ("si");


let pregunta1 = prompt("¿Que tiene 4 patas y no es un animal, tiene cuerpo pero no esta vivo y recurrentemente lo llenan de abrigos?");


if (pregunta1=="perchero") {
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
    console.log(puntosTotales = (puntos+puntosGanados));
}else{
    alert("Perdiste, suerte para la proxima!");
    console.log(puntosTotales);
}

let pregunta2 = prompt("¿Es padre de familia, su piel de un color primario y su trabajo es esencial para dar energia a su ciudad?, ¡adivina quien es!");

if ((pregunta2=="homero")&&(pregunta1=="perchero")) {
    console.log(puntosTotales = (puntos+puntosGanados+1));
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
}else if((pregunta2=="homero")&&(pregunta1!="perchero")){
    console.log(puntosTotales = (puntos+puntosGanados));
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
}else if((pregunta2!="homero")&&(pregunta1=="perchero")){
    console.log(puntosTotales = (puntos+puntosGanados));
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
}else{
    console.log(puntosTotales);
    alert("Perdiste, suerte para la proxima!");
}

let pregunta3 = prompt("Esta muerto, pero nunca estuvo vivo. si lo tocas te come, pero no tiene boca ni dientes, y esta completamente en estado liquido. ¿Sabes de que se trata?");

if ((pregunta3=="mar muerto")&&(pregunta1=="perchero")&&(pregunta2=="homero")) {
    console.log(puntosTotales = (puntos+puntosGanados+2));
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
}else if((pregunta3=="mar muerto")&&(pregunta1=="perchero")&&(pregunta2!="homero")){
    console.log(puntosTotales = (puntos+puntosGanados+1));
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
}else if((pregunta3=="mar muerto")&&(pregunta1!="perchero")&&(pregunta2=="homero")){
    console.log(puntosTotales = (puntos+puntosGanados+1));
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
}else if((pregunta3=="mar muerto")&&(pregunta1!="perchero")&&(pregunta2!="homero")){
    console.log(puntosTotales = (puntos+puntosGanados));
    alert("Ganaste!!, sos el mejor, obtuviste un punto.");
}else{
    console.log(puntosTotales);
    alert("Perdiste, suerte para la proxima!");
}


if(puntosTotales == 2){
    alert("¡Felicitaciones! Me has ganado, te mereces un aplauso :c"); 
}else{
    alert("¡Perdiste! te he ganado, me merezco un aplauso :D, ¡suerte para la proxima!");
}

let Juego2= alert("Vamos a jugar al ultimo juego. Elije dos numero y la operacion que desea realizar y te dira su resultado y los demas hasta llegar a 0 ;D");

var Operacion = prompt("Ingrese una operacion");
let Numero1 = prompt("Ingrese el primer numero");
let Numero2 = prompt("Ingrese el segundo numero");
var resultado = null;
var contador = 0;



while (Operacion != "") {
    if (Operacion=="suma"){
        var suma = ((Number(Numero1))+(Number(Numero2)));
        var resultado = suma;
        alert("La suma de los numeros es"+" "+((Number(Numero1))+(Number(Numero2))));
        console.log(resultado=suma);
        break;
    }else if(Operacion == "resta"){
        var resta = ((Number(Numero1))-(Number(Numero2)));
        var resultado = resta;
        alert("La resta de los numeros es"+" "+((Number(Numero1))-(Number(Numero2))));
        console.log(resultado=resta);
        break;
    }else if(Operacion=="multiplicacion"){
        var multiplicacion = ((Number(Numero1))*(Number(Numero2)));
        var resultado = multiplicacion;
        alert("La multiplicacion de los numeros es"+" "+((Number(Numero1))*(Number(Numero2))));
        console.log(resultado=multiplicacion);
        break;
    }else if(Operacion=="division"){
        var division = ((Number(Numero1))/(Number(Numero2)));
        var resultado = division;
        alert("La division de los numeros es"+" "+((Number(Numero1))/(Number(Numero2))));
        console.log(resultado=division);
        break;
    }else{
        alert("Debido a que no elijio numeros u/o operadores no pudo realizar el juego");
        break;
    }
}

for (resultado; resultado>=0; resultado--){
    alert(resultado);
}