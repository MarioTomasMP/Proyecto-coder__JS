let turno= Math.floor(Math.random() * 10);
let Miturno=[];
const Medicos = [{Especialidad: "clinica medica", Doctor: "oscar, rodriguez"},
    {Especialidad: "anestesiologia", Doctor: "rosa, marcello"},
    {Especialidad: "quimioterapia", Doctor: "ana, marquez"},
    {Especialidad: "clinica medica", Doctor: "marcelo, sanchez"},
    {Especialidad: "pediatria", Doctor: "antonio, muñoz"},
    {Especialidad: "anestesiologia", Doctor: "panda, martinez"},
    {Especialidad: "pediatria", Doctor: "hercules, martinez"},
    {Especialidad: "pediatria", Doctor: "jose, muller"}];

const ObraSocial= ["osam", "osde", "sancor", "sadop"];

let bucle = true;

alert("Bienvenidos al sanatorio de tomi");

while(bucle) {
    let pregunta = "Que desea hacer?: ";
    pregunta += "\n1. Sacar un Turno";
    pregunta += "\n2. Dar de baja mi turno";
    pregunta += "\n3. Mostrar mis turnos"; 
    pregunta += "\n4. Salir del turnero";

    let respuesta = parseInt(prompt(pregunta));

    switch (respuesta) {

        case 1:
            sacarTurno();
            break;
        case 2:
            eliminarTurno();
            break;
        case 3:
            mostrarTurnos();
            break;
        case 4:
            alert("Gracias por usar el turnero!")
            break;
            bucle = false;
        default:
            alert("No ingresaste una opcion valida");
            break;
    }
}

class Turno {
    constructor(Especialidad, Doctores){
        this.Especialidad = Especialidad;
        this.Doctores = Doctores;
        this.turnoSacado = false;
        this.turno = -1;
    }
    SetTurno(nuevoTurno) {
        this.turno = nuevoTurno;
    }
    descricionTurno() {
        return (`${this.turno} - ${this.Especialidad} - ${this.Doctores}`)
    }
    TengoTurno(){
        this.turnoSacado = true;
    }
}

//Funcion para cargar el turno

function sacarTurno(){
    let turnoNuevo = SolicitarTurnoNuevo();

    if (turnoNuevo) {

        turnoNuevo.SetTurno(turno);
        turno = turno + Math.floor(Math.random() * 10);
        Miturno.push(turnoNuevo);
        alert("Turno guardado")
    }
}

// funcion que solicita especialidad y nombre del doctor;

function SolicitarTurnoNuevo(){
    let check = true;

    while (check) {
        let mensaje = "";
        let Especialidad = prompt("Ingrese al profesional que necesita: \npediatria \nclinica medica \nquinesiologia \nanestesiologia");
        let Doctores = prompt("Ingrese el nombre del medico que quiera que lo atienda: \nPediatra: antonio, muños ; hercules, martinez; jose, muller. \nClinica medica: oscar, rodriguez; marcelo, sanchez. \nAnestesiologia: rosa, marcello; panda, martinez. \nQuimiterapia: ana, marquez.");

        if (!Especialidad){
            mensaje += "Debe ingresar una especialida valida";
        }
        if (!Doctores){
            mensaje += "Debe ingresar doctor valida";
        }
        if(mensaje !=""){
            alert(mensaje);
            check = confirm("Quieres cargar de nuevo los datos?");
        }else {
            return new Turno(Especialidad, Doctores);
        }
    }
}

//Funcion que elimina el turno

function eliminarTurno(){

    if(TendreMiTurno()){
        verTurno();
        let TurnoId = parseInt(prompt("Ingrese el numero del turno que desea cancelar:"));

        if (TurnoId) {
            let TurnoEncontrado = Miturno.find((turno)=> turno.id == TurnoId);

            if (TurnoEncontrado) {
                let encontrado = confirm("Desea borrar el turno seleccionado");
                if (encontrado){
                    Miturno=Miturno.filter((doctor)=> turno.id != TurnoId);
                    alert("Turno eliminado");
                }
            }
        }
    }
}


//Funcion para vel el turno guardado

function TendreMiTurno(){
    if (Miturno.length == 0){
        alert("Usted no a sacado turno");
        return false;
    }
    return true;
}

//Funcion para ver mis turnos

function mostrarTurnos(){
    if (TendreMiTurno()) {
        verTurno();
    }
}

//Funcion que recrorre mis turnos
function verTurno() {
    let mensaje = "Sus turnos son:"

    Miturno.forEach(doctor => {
        mensaje += doctor.descricionTurno() + "\n";

    })
    alert(mensaje);
}