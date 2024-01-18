const productos = [
    { id: 20, nombre: "Ventana", medida: "2 x 1,50 mts", serie: 25 ,  precio: 7500 },
    { id: 21, nombre: "Mosquitero", medida: "1 x 1 mts",  serie: 20 , precio: 2400 },
    { id: 22, nombre: "Puerta", medida: "0.80 x 2 mts",  serie: 30 , precio: 14000 },
    { id: 23, nombre: "Banderola de baño", medida: "0.60 x 0.40 mts",  serie: 20 , precio: 1400 },
    { id: 24, nombre: "Mampara de baño", medida: "1.70 x 1.90 mts",  serie: 25 , precio : 12000 }
];

const h2ss = document.getElementById("h2ss");

h2ss.innerHTML = "Este h2 fue modificado desde JS";

function mostrarProductos() {
    console.log("Aberturas disponibles por el momento:");
        console.table(productos);
    }



function agregarAlCarrito(id) {
        const producto = productos.find(g => g.id === id);
        if (producto) {
          const cantidad = 1;
          carrito.push({ ...producto, cantidad });
          console.log(`Se agregó "${producto.nombre}" al carrito.`);
          actualizarTotal();
        } else {
          console.log(`Producto con ID ${id} no encontrado.`);
        }
    }
      
function mostrarCarrito() {
        console.log("Contenido del carrito:");
        carrito.forEach(item => {
          console.log(`${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $ ${(item.precio * item.cantidad).toFixed(2)} pesos Uruguayos`);
        })
    }
      
function actualizarTotal() {
        const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        console.log(`El total del carrito es de : $ ${total.toFixed(2)} pesos Uruguayos`); 
    }
      


const carrito = [];

 
mostrarProductos();
agregarAlCarrito(24);
agregarAlCarrito(25); // Esto es una prueba de error
mostrarCarrito();
