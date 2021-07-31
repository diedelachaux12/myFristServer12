const express = require('express');
const server = express();

server.get('/',(req, res)=> {
    res.send('Hola Mundo')
})
server.get('/diego',(req, res)=> {
    res.send('Hola Mundo Otra Vez')
})





server.listen(3001,()=> {
    console.log('Server is running in the port: 3001')
})
