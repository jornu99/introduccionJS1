var nombre1 = 'José';
var primerApellido1 = 'Hernández';
var segundoApellido1 = 'Morales';
var edad1 = 18;

var nombre2 = 'María';
var primerApellido2 = 'Ruíz';
var segundoApellido2 = 'García';
var edad2 = 14;

var nombre3 = 'Sonia';
var primerApellido3 = 'Patón';
var segundoApellido3 = 'González';
var edad3 = 20;

var mayorEdad = false;

saludos(nombre1, primerApellido1, segundoApellido1);
eresMayor(edad1, mayorEdad);
finalizar(nombre1, primerApellido1, segundoApellido1, edad1, mayorEdad);
saludos(nombre2, primerApellido2, segundoApellido2);
eresMayor(edad2, mayorEdad);
finalizar(nombre2, primerApellido2, segundoApellido2, edad2, mayorEdad);
saludos(nombre3, primerApellido3, segundoApellido3);
eresMayor(edad3, mayorEdad);
finalizar(nombre3, primerApellido3, segundoApellido3, edad3, mayorEdad);
sumarEdades(edad1, edad2, edad3);

var n1 = 0;

while (n1 >= 0 && n1 <= 10) {
    console.log(n1++);
}

n1 = 0;

do {
    console.log(n1++);
}while (n1 >= 0 && n1 <= 10)

switch (nombre2) {
    case 'José':
        console.log('José no mola');
        break;
    case 'María':
        console.log('María mola');
        break;
    case 'Sonia':
        console.log('Sonia no mola');
        break;

    default:
        console.log('Nadie mola')
        break;
}

//-----------------------------------------------------

function saludos(n, pa, sa){
    console.log('Hola',n,pa,sa,', bienbenido/a');
}

function eresMayor(e, me){
    if(e >= 18){
        me = true;

        console.log('Tiene',e,'es mayor de edad');
    }else{
        console.log('Tiene',e,'es menor de edad');
    }
}

function sumarEdades(e1, e2, e3){
    var anosTotales = e1 + e2 + e3;

    console.log('La edad total es',anosTotales);
}

function finalizar(n, pa, sa, e, me){
    if(e >= 18){
        me = true;

        console.log(n,pa,sa,'es mayor de edad');
    }else{
        console.log(n,pa,sa,'es menor de edad');
    }
}
