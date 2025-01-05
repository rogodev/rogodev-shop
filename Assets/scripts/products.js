const products = document.getElementById('products');
const products_container = document.getElementById('products-container');
const products_list = document.querySelectorAll('.products-container-list');

let mouseProduct = false;
let mouseProductContainer = false;

products.addEventListener('mouseenter', () => {

    mouseProduct = true;
    products_container.style.display = 'flex'; // Hacemos visible el contenedor
    products.style.cursor =  "pointer";

    products_list.forEach((item, index) => {
        timeoutId = setTimeout(() => {
            item.classList.add('show');
        }, index * 100); // Animación secuencial
    });
});

products_container.addEventListener('mouseenter', () => {
    mouseProductContainer = true;
});

// Función que se llama cuando el ratón sale de ambos elementos
function checkBothElements() {
    if (!mouseProduct && !mouseProductContainer) {
        products_container.style.display = 'none'; // Hacemos visible el contenedor
    }
}

// Evento cuando el ratón sale de "element1"
products.addEventListener('mouseleave', () => {
    mouseProduct = false;
    setTimeout(() => {
        checkBothElements();
    }, 200); 
});

// Evento cuando el ratón sale de "element2"
products_container.addEventListener('mouseleave', () => {
    mouseProductContainer = false;
    setTimeout(() => {
        checkBothElements();
    }, 200); 
});



