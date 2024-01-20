let numerosPosibles = 10;
let intentosPosibles = 3

// Creamos una función que recibe dos parámetros, el elemento y el texto que queremos asignarle
function asignarTexto(elemento, texto) {
    let elementoDelDom = document.querySelector(elemento);
    elementoDelDom.innerHTML = texto;
}

// Llamamos a la función asignarTexto y le pasamos como parámetros el elemento y el texto que queremos asignarle
asignarTexto('h1', 'adivina el número');
asignarTexto('p', `Ingrese un número entre 1 y ${numerosPosibles}, posee ${intentosPosibles} intentos`);

let numerosUsados = [];

// Creamos una función que genera un número aleatorio entre 0 y 10
function generarNumero() {
    if (numerosUsados.length == 10) {
        return;
    } else {
        let numeroActual = Math.floor(Math.random() * 10) + 1;
        if (!numerosUsados.includes(numeroActual)) {
            numerosUsados.push(numeroActual);
            return numeroActual;
        } else {
            return generarNumero();
        }
    }
}
// Variables para hacer funcionar el juego
let numeroAleatorio = generarNumero();
let numeroIntentos = 2;
let contadorIntentos = 1;

function verificarIntento() {


    // Obtenemos el valor del input con id "numeroUsuario" y lo convertimos a número
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroIntentos > 0) {
        // Verificamos si el número ingresado es igual al número aleatorio
        if (numeroUsuario == numeroAleatorio) {
            asignarTexto('h1', '¡Ganaste!');
            asignarTexto('p', `Ganaste con un total de ${contadorIntentos} ${contadorIntentos == 1 ? "intento" : "intentos"}`);

            habilitarReiniciar();
            console.log('Ganaste');

        } else {
            asignarTexto('h1', `Fallaste, tienes ${numeroIntentos} ${numeroIntentos == 1 ? "intento" : "intentos"} más`);
            // Verificamos si el número ingresado es mayor o menor al número aleatorio
            if (numeroUsuario > numeroAleatorio) {
                asignarTexto('p', 'El número es menor');
            } else {
                asignarTexto('p', 'El número es mayor');
            }
            limpiarInput();
            // Aumentamos el contador de intentos y disminuimos el número de intentos restantes
            contadorIntentos++;
            numeroIntentos--;
        }

    } else {
        if (numeroUsuario == numeroAleatorio) {
            asignarTexto('h1', '¡Ganaste!');
            asignarTexto('p', `Ganaste con un total de ${contadorIntentos} ${contadorIntentos == 1 ? "intento" : "intentos"}`);

            habilitarReiniciar();
            console.log('Ganaste');

        } else {
            asignarTexto('h1', 'Perdiste');
            asignarTexto('p', `El número era ${numeroAleatorio}`);

            habilitarReiniciar();
            console.log('Perdiste');
        }
    }

}

// Creamos una función que reinicia el juego
function reiniciarJuego() {

    if (numerosUsados.length == numerosPosibles) {
        finDelJuego();

    } else {
        // Reiniciamos las variables
        numeroIntentos = 2;
        contadorIntentos = 1;

        // Habilitamos el input
        document.getElementById('numeroUsuario').disabled = false;

        // Vaciamos el input
        limpiarInput();

        // Generamos un nuevo número aleatorio
        numeroAleatorio = generarNumero();

        // Habilitamos el botón de intentar
        habilitarBotonIntentar();
    }

}


function habilitarReiniciar() {

    document.getElementById('btnReiniciar').disabled = false;

    document.getElementById('btnIntentar').disabled = true;

    document.getElementById('numeroUsuario').disabled = true;
}

function habilitarBotonIntentar() {

    document.getElementById('btnIntentar').disabled = false;

    document.getElementById('btnReiniciar').disabled = true;

    document.getElementById('numeroUsuario').disabled = false;

    asignarTexto('h1', 'adivina el número');

    asignarTexto('p', `Ingrese un número entre ${numerosPosibles}, posee ${intentosPosibles} ${intentosPosibles == 1 ? "intento" : "intentos"}`);
}

function finDelJuego() {
    
        document.getElementById('btnIntentar').disabled = true;
    
        document.getElementById('btnReiniciar').disabled = true;
    
        document.getElementById('numeroUsuario').disabled = true;
    
        asignarTexto('h1', 'Fin del juego');
    
        asignarTexto('p', `Gracias por jugar`);
    
}

function limpiarInput() {
    document.getElementById('numeroUsuario').value = '';
}