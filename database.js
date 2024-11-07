const mongoose = require('mongoose');

mongoose.set('useFindAndModify',false);
const UriMongoDB ='mongodb://localhost:27017/FamilyGamesDb'
const options = {

    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}

mongoose.connect(UriMongoDB,options)
.then(console.log('DB is connected'))
.catch(err =>console.error(err))



module.exports = mongoose;