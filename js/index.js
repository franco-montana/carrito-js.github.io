const PRECIO_BASE = 550000


const precioInicial = document.querySelector('.precio-inicial');
const cantidadElemento = document.querySelector('.cantidad');
const valorTotal = document.querySelector('.valor-total');
const botonesCard = document.querySelectorAll('.card button');


precioInicial.textContent = PRECIO_BASE;


let cantidad = 0;


function actualizarCantidadYTotal(nuevaCantidad) {
   
    cantidad = Math.max(0, nuevaCantidad);
    
  
    cantidadElemento.textContent = cantidad;
    
    
    const total = PRECIO_BASE * cantidad;
    valorTotal.textContent = total;
}


botonesCard.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        if (index === 0) {
            
            actualizarCantidadYTotal(cantidad + 1);
        } else {
           
            actualizarCantidadYTotal(cantidad - 1);
        }
    });
});


actualizarCantidadYTotal(0);