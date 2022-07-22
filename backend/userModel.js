const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    address : String,
    phone : Number,
})

module.exports = mongoose.model('Users',userSchema,'Users')