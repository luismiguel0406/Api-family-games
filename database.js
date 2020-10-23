const mongoose = require('mongoose');
const URI ='mongodb://localhost/family';

const options = {

    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(URI,options)
.then(console.log('DB is connected'))
.catch(err =>console.error(err))



module.exports = mongoose;