const mongoose = require('mongoose');
const URI ='mongodb+srv://luis:04061991Luis@cluster0.ahfpe.mongodb.net/ComputersDatabase?retryWrites=true&w=majority';

const options = {

    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(URI,options)
.then(console.log('DB is connected'))
.catch(err =>console.error(err))



module.exports = mongoose;