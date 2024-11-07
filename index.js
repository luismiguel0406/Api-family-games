const express = require ('express');
const app = express();
const {mongoose} = require('./database')


//iniciar el servidor

app.listen( 3000 , ()=>{
    console.log('Server running on Port', 3000)
})

//middlewares

app.use(express.json())

// rutas
app.use('/api-family',require('./Routes/Computers.router'))
app.use('/api-family',require('./Routes/displays.router'))





