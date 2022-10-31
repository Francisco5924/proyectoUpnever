
function Productos (nombre,precio,stock, img){
    this.nombre= nombre;
    this.precio= precio;
    this.stock= stock || 0;
    this.img= img;
    this.restarStock = function (cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function (cantidad){
        this.stock += cantidad
    }
}
let producto1 = new Productos("Campera Jeans Azul",4000,15, "../img/campera1.jpeg")
let producto2 = new Productos("Sweater beige", 2500, 15, "../img/campera2.jpeg" )
let producto3 = new Productos("Chaleco Engomado Marro", 8000 ,15, "../img/campera3.jpeg")
let producto4 = new Productos("Campera Jeans Con Corderito",9000,15)
let producto5 = new Productos("Campera Puffer Negra",6500,15)
let producto6 = new Productos("Cardigan Verde",6000,15)
let producto7 = new Productos("Chaleco Puffer Blanco",3000,15)
let producto8 = new Productos("Buzo Alaska",2500,15)
let producto9 = new Productos("Campera Jeans Overside",8500,15)
let producto10 = new Productos("Chaleco Puffer Negro",9000,15)
let producto11 = new Productos("Sweater Verde Overside",4000,15)
let producto12 = new Productos("Buso Azul",3000,15)

let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]

let listaProductoStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductoStock.map((prod) => prod.nombre)

let precioTotal = 0

let gallery = document.getElementsByClassName("gallery")
console.log(gallery);






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




