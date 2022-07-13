// funcion suma y division.
const suma = (a, b) => a + b;
const division = (a, b) => a / b;
let bucle = true;

var NotasTotales=null;
var Promedio=null;


//bucle en el cual se pide la nota, las suma y almacena, y tambien evalua si la nota puesta es valida.
while (bucle) {
    var Notas = Nota()
    if (!isNaN(Notas) && Notas <= 10 && Notas > 0 && Notas != "" && Notas != null) {
        var NotasTotales = suma(NotasTotales, Notas);
        alert("La suma de las notas es"+" "+NotasTotales);
        console.log(NotasTotales);
        continue;
    }else {
        alert("La nota ingresada no es valida")
        break;
    }
}


let alumnos;

// bucle que se encarga de pedir la cantidad de alumnos y asi sacar el promedio de las notas.
while (bucle) {
    alumnos = Number(prompt("Ingrese la cantidad de alumnos"));

    if (!isNaN(alumnos) && alumnos != "" && alumnos != null) {
        var Promedio = division(NotasTotales, alumnos);
        alert("el promedio de las notas del curso es"+" "+Promedio);
        console.log(Promedio);
        break;
    }else {
        alert("La cantidad de alumnos ingressada es invalida")
        continue;
    }
}



//Funcion que pide la nota del alumno
function Nota(Nota) {
    return Nota = Number(prompt("Ingrese el nota del alumno para sacar el promedio total del curso"));
}