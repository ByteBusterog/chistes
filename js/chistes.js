const chistes = {
    1: "¿Por qué Joseph nunca se pierde? Porque siempre sigue la señal de 'salida'.",
    2: "¿Qué hace Enoc cuando tiene hambre? ¡Se va de 'paseo'!",
    3: "¿Por qué Dana no cuenta chistes? Porque todos los encuentra muy 'serios'.",
    4: "¿Por qué German siempre gana en ajedrez? Porque siempre 'mueve' bien sus piezas.",
    5: "¿Cómo se despide Palacios? ¡Hasta 'palacio'!",
};

document.addEventListener('DOMContentLoaded', () => {
    const chisteButton = document.querySelector('.md-filled-button'); // El botón de "Enviar"
    const chisteDisplay = document.getElementById('chiste-display'); // Párrafo para mostrar el chiste

    // @ts-ignore
    chisteButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el envío del formulario
        // @ts-ignore
        const selectedValue = document.querySelector('md-select-menu').getAttribute('value');
        const chiste = chistes[selectedValue];
        // @ts-ignore
        chisteDisplay.textContent = chiste ? chiste : "Selecciona un integrante.";
    });
});
