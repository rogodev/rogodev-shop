const collection = document.getElementById('collections');
const collection_container = document.getElementById('collections-container');
const collection_list = document.querySelectorAll('.collections-container-list');

let timeoutId; // Variable para guardar el ID del setTimeout
let mouseCollections = false;
let mouseCollectionsContainer = false;

collection.addEventListener('mouseenter', () => {

    mouseCollections = true;
    collection_container.style.display = 'flex'; // Hacemos visible el contenedor
    collection.style.cursor =  "pointer";

    collection_list.forEach((item, index) => {
        timeoutId = setTimeout(() => {
            item.classList.add('show');
        }, index * 150); // Animación secuencial
    });
});

collection_container.addEventListener('mouseenter', () => {
    mouseCollectionsContainer = true;
});

// Función que se llama cuando el ratón sale de ambos elementos
function checkBothElementsCollections() {
    if (!mouseCollections && !mouseCollectionsContainer) {
        collection_container.style.display = 'none'; // Hacemos visible el contenedor
    }
}

// Evento cuando el ratón sale de "element1"
collection.addEventListener('mouseleave', () => {
    mouseCollections = false;
    setTimeout(() => {
        checkBothElementsCollections();
    }, 200); 
});

// Evento cuando el ratón sale de "element2"
collection_container.addEventListener('mouseleave', () => {
    mouseCollectionsContainer = false;
    setTimeout(() => {
        checkBothElementsCollections();
    }, 200); 
});



