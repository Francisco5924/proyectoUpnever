
let gallery = document.getElementById("gallery")
console.log(gallery);

function Productos (nombre,precio,stock){
    this.nombre= nombre;
    this.precio= precio;
    this.stock= stock;
    this.restarStock = function (cantidad){
        this.stock -= cantidad
    }
}
let productoBuzo = new Productos("Buzo",4000,15)
let productoRemera = new Productos("Remera",2500,15)
let productoPantalon = new Productos("Pantalon",6000,5)

/*let productoBuzo = {
    nombre: "Buzo",
    precio: 4000,
    stock: 15,
}*/
/*const productoRemera = {
    nombre: "Remera",
    precio: 2500,
    stock: 15,
}*/
/*const productoPantalon = {
    nombre: "Pantalon",
    precio: 6000,
    stock: 5,
}*/

/*let productoBuzo = "Buzo"
let precioBuzo = 4000
let stockBuzo = 15

let productoRemera = "Remera"
let precioRemera = 2500
let stockRemera = 15

let productoPantalon = "Pantalon"
let precioPantalon = 6000
let stockPantalon = 5*/
/*let precioTotal = 0    // desde aca

                                            // bienvenida al usauario.


let bienvenido = prompt("Bienvenido a UP-NEVER, ingrese su nombre.");
alert( "Bienvenido/a " + bienvenido);


                                            //menu 
let opciones = prompt ("Eliga una opción que desea comprar: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
function compra (cantidad,precio){
    precioTotal += (cantidad * precio)
}*/   // hasta aca
/*function stock (cantidad, stock, precio){
        if (cantidad <= stock){
        
        }else {
            alert("Actualmente tenemos " + stock + "unidades de este producto." )
        }
    }*/



/*if (opciones){
    
    
                                           //comprar un articulo o varios
        while (opciones != "x" && opciones != "X" ){
            switch (opciones){  
            case '1':
                    let cantidadProductoBuzo = parseInt (prompt("Ingrese cantidad de " + productoBuzo.nombre + " que desea comprar"))
                    compra(cantidadProductoBuzo,productoBuzo.precio)
                    alert ("El precio total es " + precioTotal)
                    cantidadProductoBuzo <= Productos.stock
                    opciones = prompt ("Desea seguir comprando seleccione una opción: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
            break;
            case '2':
                    let cantidadProductoRemera = parseInt (prompt("Ingrese cantidad de " + productoRemera.nombre + " que desea comprar"))
                    compra(cantidadProductoRemera,productoRemera.precio);
                    alert ("El precio total es " + precioTotal);
                    opciones = prompt ("Desea seguir comprando seleccione una opción: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
            break;
            case '3':
                    let cantidadProductoPantalon = parseInt (prompt("Ingrese cantidad de " + productoPantalon.nombre + " que desea comprar"))
                    compra(cantidadProductoPantalon,productoPantalon.precio);
                    alert ("El precio total es " + precioTotal);
                    opciones = prompt ("Desea seguir comprando seleccione una opción: \n 1 - Buzo. \n 2 - Remera. \n 3 - Pantalón. \n Presiona X para finalizar");
            break;
            

            default:
                
                break;
            }
        }
}else{
    alert("Gracias por su compra");
}
*/




