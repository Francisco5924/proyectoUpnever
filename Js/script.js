const galeria = document.getElementById("galeria");
//array con objetos
const producto = [{
    id:1,
    nombre: "Campera Jeans Azul",
    precio: 4000,
    stock: 15,
    img : "../img/campera1.jpeg",
},
{
    id:2,
    nombre: "Sweater beige",
    precio: 2000,
    stock: 15,
    img : "../img/campera2.jpeg",
},
{
    id:3,
    nombre: "Chaleco Engomado Marro",
    precio: 8000,
    stock: 15,
    img : "../img/campera3.jpeg",
},
{
    id:4,
    nombre: "Campera Jeans Con Corderito",
    precio: 9000,
    stock: 15,
    img : "../img/campera4.jpeg",
},
{
    id:5,
    nombre: "Campera Puffer Negra",
    precio: 6500,
    stock: 15,
    img : "../img/campera5.jpeg",
},
{
    id:6,
    nombre: "Cardigan Verde",
    precio: 6000,
    stock: 15,
    img : "../img/campera6.jpeg",
},
{
    id:7,
    nombre: "Chaleco Puffer Blanco",
    precio: 6500,
    stock: 15,
    img : "../img/campera7.jpeg",
},
{
    id:8,
    nombre: "Buzo Alaska",
    precio: 2500,
    stock: 15,
    img : "../img/campera8.jpeg",
},
]



//carrito vacio
let carrito =[]
//recorrer el array
producto.forEach((prod)=> {
    let cards = document.createElement("div");
    cards.className= "cards"
    cards.innerHTML=`<img claas=imgcard src="${prod.img}"><h5>${prod.nombre}</h5><p>Presio$ ${prod.precio}</p><a class="btn btn-primary">Comprar</a>`;

    galeria.append(cards);









//<img src="${prod.img}">
//<h5 id=cardNombre> ${prod.nombre}</h5>
//<p id=cardPrecio>Precio $${prod.precio}</p>

    //cracion de boton
    //let comprar = document.createElement("button");
    //comprar.innerText = "Comprar";
    //containerCards.append(comprar);

})


/*






let producto8 = new Producto("Buzo Alaska",2500,15, "../img/campera8.jpeg")
let producto9 = new Producto("Campera Jeans Overside",8500,15, "../img/campera10.jpeg")
let producto10 = new Producto("Chaleco Puffer Negro",9000,15, "../img/campera11.jpeg")
let producto11 = new Producto("Sweater Verde Overside",4000,15, "../img/campera14.jpeg")
let producto12 = new Producto("Buso Azul",3000,15, "../img/campera13.jpeg")


//array
let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]

let listaProductoStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductoStock.map((prod) => prod.nombre)

let precioTotal = 0



//generando cards
let galeria = document.getElementById("galeria")
console.log(galeria);

for(const prod of listaProductos){

let card = document.createElement ("div")

card.className = "card"

card.innerHTML =`<div class="card"><img src="${prod.img}"><div class="card-body"><h5 id=cardNombre>${prod.nombre}</h5><p id=cardPrecio>Precio ${prod.precio}</p>`

galeria.append(card)


}





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




