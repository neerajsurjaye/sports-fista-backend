let mongoose = require('mongoose')
let schema = mongoose.Schema

let comment = new schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    desc: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('comment', comment)