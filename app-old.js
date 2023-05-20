

const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json'})

    // const persona = {
    //     id: 1,
    //     nombre: 'Jimmy'
    // }

    // res.write( JSON.stringify(persona)); //pasa a json el objeto y muestra
    // res.end(); //Para decirle a node que termine la peticion

    res.write('Hola Mundo');
    res.end();

})

.listen(8080)

console.log('Escuchando el puerto ', 8080);