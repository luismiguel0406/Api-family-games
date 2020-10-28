const express = require ('express');
const app = express();
const {mongoose} = require('./database')

//ajustes
app.set('port',process.env.PORT || 3000)

//iniciar el servidor

app.listen(app.get('port'),()=>{
    console.log('Server running on Port',app.get('port'))
})

//middlewares

app.use(express.json())

// rutas
app.use('/api/family',require('./Routes/Computers.router'))
app.use('api/family',require('./Routes/displays.router'))





