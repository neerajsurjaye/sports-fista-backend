let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')
let Schema = mongoose.Schema

let event = new Schema({
    title: String,
    desc: String,
    about: String,
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
    date: { type: Date, default: Date.now },
    images: [{ type: String }]
})

event.plugin(mongoosePaginate)

module.exports = mongoose.model('event', event)