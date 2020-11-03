var socket = io();

// Escuchar información del servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Federico',
    password: '******',
    mensaje: 'Me estoy conectando al servidor'
}, function(respuestaServidor) {
    console.log('respuesta server: ', respuestaServidor);
});

// Escuchar información del servidor
socket.on('enviarMensaje', function(mensajeServidor) {
    console.log('Servidor:', mensajeServidor);
});