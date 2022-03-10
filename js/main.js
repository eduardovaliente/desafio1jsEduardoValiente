let cotizacion = 43.80;
alert ("Bienvenido a CODER exchange! 😁");
let nombreUsuario= prompt ("Ingresa tu nombre");
function saludo() {
    alert ("¡Bienvenido " + nombreUsuario + "!");
    alert ("Por mejoras en las cotizaciones, comuníquese telefónicamente al 0800 0123")
}

saludo();

let compraCliente = prompt("Ingrese el monto en dólares que desea comprar");
if (compraCliente >= 500) {
    alert ("Para montos significativos como los de esta operacion, puede solicitar mejora de la cotización");
}
while (compraCliente == "") {
    alert("Ingrese un monto");
    compraCliente = prompt("Ingrese el monto en dólares que desea comprar");
}

alert("U$S" + compraCliente + " cuestan " + "$U" + compraCliente * cotizacion);

let continuarOsalir = prompt("Si desea realizar una nueva operación digite 1, de lo contrario digite 0 para salir");

while (continuarOsalir != "0") {
    switch (continuarOsalir) {
        case '1':
            compraCliente = prompt("Ingrese el monto en dólares que desea comprar");
            if (compraCliente >= 500) {
                alert ("Para montos significativos como los de esta operación, puede solicitar mejora de la cotización");
            }
            alert("U$S" + compraCliente + " cuestan " + "$U" + compraCliente * cotizacion);
            break;
        default:
            alert("Ingresa una opción válida 😕")
            break;
    }

    continuarOsalir = prompt("Si desea realizar una nueva operación digite 1, de lo contrario digite 0 para salir");
}

alert ("¡Gracias por preferirnos, " + nombreUsuario + "! 😁");