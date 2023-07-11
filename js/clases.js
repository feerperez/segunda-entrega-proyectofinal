class Compra {
    constructor(carritoDeCompras) {
      this.carrito = carritoDeCompras;
    }
    subtotal() {
      if (this.carrito.length > 0) {
        return this.carrito.reduce((acc, celular) => acc + celular.precio, 0);
      }
    }
  }