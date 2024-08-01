const botonCita = document.getElementById('boton-cita');
const lugarCita = document.getElementById('lugar-cita');

const opciones = [
    'Ir al cine',
    'Ir a un restaurante',
    'Ir a un parque',
    'Ir a un museo',
    'Cine en mi casa',
    'Cocinamos Juntos',
    'Pasear por la ciudad',     
    'Jugar un juego de mesa',
    'Vamos a alguna feria',
    'Ir a un Bar',
    'Noche de karaoke',
    'Ir a un centro de juegos',
];

let interval;
let currentIndex = 0;

botonCita.addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = 0;
    lugarCita.textContent = opciones[currentIndex];
    
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % opciones.length;
        lugarCita.textContent = opciones[currentIndex];
    }, 500); // Cambia las opciones cada 500ms

    const randomTime = Math.random() * (10000 - 3000) + 3000; // Tiempo aleatorio entre 3 y 10 segundos
    
    setTimeout(() => {
        clearInterval(interval);
        const opcionFinal = opciones[currentIndex];
        lugarCita.textContent = opcionFinal;
        enviarOpcionSeleccionada(opcionFinal);
        lanzarConfeti();
    }, randomTime); // Detiene después de un tiempo aleatorio
});

function enviarOpcionSeleccionada(opcion) {
    const webhookUrl = 'https://webhook.site/ca32a1c6-919c-48a9-9489-aa96ec0e3c22'; // Tu URL única de Webhook.site

    axios.post(webhookUrl, {
        opcionSeleccionada: opcion
    })
    .then(response => console.log('Success:', response.data))
    .catch(error => console.error('Error:', error));
}

function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
