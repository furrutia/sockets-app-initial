const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // Enviar información al cliente
    client.emit('enviarMensaje', {
        servidor: 'SERVIDOR-ATREVIDO',
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    // Escuchar el cliente
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);


        client.broadcast.emit('enviarMensaje', data);

        // if (mensajeCliente.usuario) {
        //     callback({
        //         respuesta: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'TODO SALIO MAL!!!'
        //     });
        // }

    });

});