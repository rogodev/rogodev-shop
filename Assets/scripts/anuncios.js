const textos = [
    "FREE SHIPPING FOR +150€ ORDERS",
    "ENVÍOS: ESPAÑA (3-5 DÍAS LABORABLES) | RESTO DEL MUNDO (5-7 DÍAS LABORABLES)?"
];

let indice = 0;

// Función para cambiar el texto con animación
function cambiarTexto(direccion) {
    const textoElemento = document.getElementById('anuncio-text');

    textoElemento.style.animation = "anuncio_animation_out 1.5s ease forwards";

    // Cambiar el índice
    if (direccion === 'izquierda') {
        indice = (indice === 0) ? textos.length - 1 : indice - 1;
    } else {
        indice = (indice === textos.length - 1) ? 0 : indice + 1;
    }

    setTimeout(()=>{

        textoElemento.textContent = textos[indice];
        textoElemento.style.opacity = 1;
        textoElemento.style.animation = "anuncio_animation_in 1.5s ease forwards";
    },600);

}

const btn_izq = document.getElementById('btn-izquierda');
const btn_dcha = document.getElementById('btn-derecha');


// Eventos de los botones
btn_izq.addEventListener('click', () => {
    cambiarTexto('izquierda');
});

btn_dcha.addEventListener('click', () => {
    cambiarTexto('derecha');
});
