'use strict'
const mongoose = require('mongoose');

const {Schema} = mongoose;

const computers_schema = new Schema({

        cpu : String,
        memoria_ram: String,
        socket: String,
        disco_duro: String,
        color:String,
        tarjeta_de_video:String


});
module.exports = mongoose.model('computers',computers_schema,'computers');
