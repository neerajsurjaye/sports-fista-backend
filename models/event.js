let mongoose = require('mongoose')
let Schema = mongoose.Schema

let event = new Schema({
    title: String,
    desc: String,
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    // comments: { type: Schema.Types.ObjectId, ref: 'comment' }
})

module.exports = mongoose.model('event', event)