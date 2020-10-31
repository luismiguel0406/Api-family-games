const mongoose = require('mongoose');
const URI ='mongodb://localhost/family';

mongoose.set('useFindAndModify',false);
const UriMongoDBAtlas ='mongodb+srv://luis:04061991Luis@cluster0.ahfpe.mongodb.net/family?retryWrites=true&w=majority'
const options = {

    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}

mongoose.connect(UriMongoDBAtlas,options)
.then(console.log('DB is connected'))
.catch(err =>console.error(err))



module.exports = mongoose;