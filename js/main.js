let cotizacion = 43.80;

class Cliente {
    constructor(nombre, apellido, edad, documento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.documento = documento;
    }
}

let clientes = [];

function registrarClientes() {
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingresa tu apellido");
    let edad = prompt("Ingresa tu edad");
    let documento = prompt("Ingresa tu documento");

    const cliente = new Cliente(nombre, apellido, edad, documento);

    clientes.push(cliente);

    alert("¡Bienvenido "+nombre+"! Ahora podrás aprovechar beneficios exclusivos")
}

 alert ("Bienvenido a CODER exchange! 😁");
 let estadoUsuario = prompt("Si desea registrarse para obtener beneficios especiales digite 1, de lo contrario presione aceptar");

 if (estadoUsuario == 1) {
    registrarClientes();
 }

 if(clientes.length<=50){
     alert("¡Felicidades! Estás dentro de los primeros 50 clientes registrados, reclama tu beneficio especial.")
 }

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

alert ("¡Gracias por preferirnos! 😁");