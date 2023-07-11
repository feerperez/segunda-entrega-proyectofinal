const carrito = [];
const celulares = [
  { imagen: "./images/11.webp", id: 1, nombre: "IPHONE 11", precio: 250000 },
  { imagen: "./images/11pro.webp", id: 2, nombre: "IPHONE 11 PRO", precio: 265000 },
  { imagen: "./images/11promax.webp", id: 3, nombre: "IPHONE 11 PRO MAX", precio: 270000 },
  { imagen: "./images/12.webp", id: 4, nombre: "IPHONE 12", precio: 260000 },
  { imagen: "./images/12pro.webp", id: 5, nombre: "IPHONE 12 PRO", precio: 275000 },
  { imagen: "./images/12promax.webp", id: 6, nombre: "IPHONE 12 PRO MAX", precio: 280000 },
  { imagen: "./images/13.webp", id: 7, nombre: "IPHONE 13", precio: 270000 },
  { imagen: "./images/13pro.webp", id: 8, nombre: "IPHONE 13 PRO", precio: 285000 },
  { imagen: "./images/13promax.webp", id: 9, nombre: "IPHONE 13 PRO MAX", precio: 290000 },
  { imagen: "./images/14.webp", id: 10, nombre: "IPHONE 14", precio: 280000 },
  { imagen: "./images/14pro.webp", id: 11, nombre: "IPHONE 14 PRO", precio: 295000 },
  { imagen: "./images/14promax.webp", id: 12, nombre: "IPHONE 14 PRO MAX", precio: 300000 },
];
var stocks = [
  { id: 1, cantidad: 10 },
  { id: 2, cantidad: 20 },
  { id: 3, cantidad: 6 },
  { id: 4, cantidad: 30 },
  { id: 5, cantidad: 12 },
  { id: 6, cantidad: 5 },
  { id: 7, cantidad: 6 },
  { id: 8, cantidad: 10 },
  { id: 9, cantidad: 26 },
  { id: 10, cantidad: 40 },
  { id: 11, cantidad: 10 },
  { id: 12, cantidad: 23 },
];
let id;

function cargar() {
  for (var i = 0; i < celulares.length; i++) {
    if (stocks[i].cantidad != 0) {
      document.querySelector(".shop").innerHTML += `
  <div class="col-3 text-center">
    <div class="card">  
        <img src="${celulares[i].imagen}" alt="${celulares[i].nombre}">
        <h1> ${celulares[i].nombre}</h1>
        <h3>$${celulares[i].precio}</h3>
        <p>Codigo ${celulares[i].id}</p>
        <p>Disponible ${stocks[i].cantidad}</p>
        
    </div> 
  </div>   
  `;
    }
  }
}
const error = "⛔️ Error en el código ingresado.";
const opcion = "Por favor ingrese el codigo del celular a comprar";
function modStock(id) {
  let foundindex = stocks.findIndex((x) => x.id == id);
  let numero = stocks[foundindex].cantidad;
  stocks[foundindex].cantidad = numero - 1;
}
function buscar(id, tabla) {
  let busqueda = tabla.find((datos) => datos.id === parseInt(id));
  return busqueda;
}

function terminarCompra() {
  if (carrito.length === 0) {
    console.warn("El carrito está vacío.");
    return;
  }
  const buy = new Compra(carrito);
  alert("El precio total es de: $ " + buy.subtotal());
  let respuesta = confirm("¿Deseas confirmar tu pago?");
  if (respuesta === true) {
    alert(
      "Confirmamos tu pago de: $ " +
        buy.subtotal() +
        "\n Muchas gracias por la compra"
    );
    modStock(id);
    carrito.length = 0;
    document.querySelector(".shop").innerHTML = "";
    cargar();
  }
}

function verCarrito() {
  console.table(carrito);
}

function comprar() {
  id = prompt(opcion);
  if (isNaN(id)) {
    alert(error);
    let respuesta = confirm("¿Deseas intentar de nuevo?");
    if (respuesta === true) {
      comprar();
    }
    return;
  }

  let celularElegido = buscar(id, celulares);
  if (celularElegido === undefined) {
    alert(error);
    return;
  }
  alert(
    celularElegido.nombre +
      " " +
      "- $ " +
      celularElegido.precio +
      " - ha sido agregado al carrito."
  );
  carrito.push(celularElegido);
  let respuesta = confirm("¿Quiere comprar otro celular?");
  respuesta === true ? comprar() : terminarCompra();
}

const element = document.getElementById("myBtn");
element.addEventListener("click", comprar);
window.addEventListener("load", cargar);