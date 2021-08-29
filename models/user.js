let mongoose = require('mongoose')
let Schema = mongoose.Schema

let User = new Schema({
    username: String,
    password: String,
    isOrgnization: { type: Boolean, default: false }
    //enlisted in events
})

module.exports = mongoose.model('user', User)
