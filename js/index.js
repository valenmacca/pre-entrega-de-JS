// variables
let nombre = prompt("Introduzca su nombre");
console.log(`El nombre del usuario es ${nombre}`);
let edad = parseInt(prompt(`${nombre} introduzca su edad por favor` ))
console.log(`su edad es ${edad}`)

if(edad >= 18){
    console.log("tienes la edad permitida para sacar el carnet")
    enfermedad()
}
else if(edad >= 16){
    console.log("Puedes sacar el carnet con autorización de tus padres o tutores legales.");
    let autorizacion;
    while(true) {
        autorizacion = prompt("¿Tiene autorización de su padre o tutor responsable? ('si'/'no')").toLowerCase();
        if(autorizacion === "si"){
            enfermedad();
            break;
        }
        else if(autorizacion === "no"){
            console.log("Sin autorización de tus padres/tutores no puedes sacar el carnet de conducir");
            break; 
        }
        else {
            console.log("Respuesta no válida. Por favor, responda 'si' o 'no'.");
            
        }
    }
}

else{
    console.log("no tienes la edad para sacar el carnet de conducir");
}
// funcion
function enfermedad() {
    let tieneEnfermedad;
    do {
        tieneEnfermedad = prompt("¿Tiene alguna enfermedad? ('si'/'no')").toLowerCase();
        if (tieneEnfermedad === 'si') {
            let indiqueSuenfermedad = prompt("Indique aquí todas sus enfermedades:");
            let email2 = prompt("Ponga aquí su email asi nos contactaremos y le pediremos todos los papeles correspondientes para llevar a cabo el registro del carnet");
            console.log(`Gracias ${nombre}, dentro de poco te mandaremos un email a ${email2} y le solicitaremso mas informacion.`);
            break;
        } else if (tieneEnfermedad === 'no') {
            console.log("No has reportado una enfermedad, puedes sacar el carnet.");
            let email = prompt("Ponga aquí su email asi nos contactamos para hacer el proceso de sacar el carnet");
            console.log(`Gracias ${nombre}, nos comunicaremos dentro de poco a ${email} .`);
            break;
        } else {
            console.log("Respuesta no válida. Por favor, responda 'si' o 'no'.");
        }
    } while (true);
    }