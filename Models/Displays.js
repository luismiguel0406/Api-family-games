'use strict'
const mongoose = require('mongoose');

const {Schema} = mongoose;

const display_schema = new Schema({
    
    inches:String,
    resolution:String,
    serie:String,
    color:String

});

module.exports = mongoose.model('displays',display_schema,'displays');