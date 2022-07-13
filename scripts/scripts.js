// funcion suma
const suma = (a, b) => a + b;
let bucle = true;

var NotasTotales=null;
var Promedio=0;


//bucle en el cual se pide la nota y evalua si la nota puesta es valida
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
    let alumnos = Number(prompt("Ingrese la cantidad de alumnos"));

    switch(alumnos){
        case (alumnos > 0):
            alert("El promedio del curso es"+" "+Promedio(NotasTotales / alumnos));
            break;
        default:
            alert("No pudo realizarse el promedio");
            break;
    }
}



//Funcion que pide la nota del alumno
function Nota(Nota) {
    return Nota = Number(prompt("Ingrese el nota del alumno para sacar el promedio total del curso"));
}