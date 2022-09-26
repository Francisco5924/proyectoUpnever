let productoBuzo = "Buzo"
let precioBuso = 4000
let stockBuso = 15
let productoRemera = "Remera"
let precioRemera = 2500
let stockRemera = 15
let productoPantalon = "Pantalon"
let precioPantalon = 6000
let stockPantalon = 5
let precioTotal = 0

                                            // bienvenida al usauario.


let bienvenido = prompt("Bienvenido a UP-NEVER, ingrese su nombre.");
alert( "Bienvenido/a " + bienvenido);


                                            //menu 
let opciones = prompt ("Eliga una opción que desea comprar: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
function compra (cantidad, precio){
    precioTotal += (cantidad * precio)
}

if (opciones){

                                           //comprar un articulo o varios
        while (opciones != "x" && opciones != "X" ){
            switch (opciones){
            case '1':
                    let cantidadProductoBuzo = parseInt (prompt("Ingrese cantidad de " + productoBuzo + " que desea comprar"))
                    compra = (cantidadProductoBuzo * precioBuso);
                    alert ("El precio total es " + compra);
                    opciones = prompt ("Desea seguir comprando seleccione una opción: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
            break;
            case '2':
                    let cantidadProductoRemera = parseInt (prompt("Ingrese cantidad de " + productoRemera + " que desea comprar"))
                    compra = (cantidadProductoRemera * precioRemera);
                    alert ("El precio total es " + compra);
                    opciones = prompt ("Desea seguir comprando seleccione una opción: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
            break;
            case '3':
                    let cantidadProductoPantalon = parseInt (prompt("Ingrese cantidad de " + productoPantalon + " que desea comprar"))
                    compra = (cantidadProductoPantalon * precioPantalon)  ;
                    alert ("El precio total es " + compra);
                    opciones = prompt ("Desea seguir comprando seleccione una opción: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
            break;
            default:
                break;
            }
        }
}else{
    alert("Gracias por su compra");
}





