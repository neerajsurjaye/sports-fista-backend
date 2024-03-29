// imports
let express = require('express')
let app = express()

let cors = require('cors')

let mongoose = require('mongoose')

let eventRoute = require('./routes/eventRoute')
let userRoute = require('./routes/userRoute')
let commentRoute = require('./routes/commentRoute')

app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(express.static('uploads'))

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/sports-fista', { useNewUrlParser: true })


//Routes
//===================================================================
//Event Route
app.use('/event', eventRoute)

//Users/Organization Route
app.use('/users', userRoute)

//Comments Route
app.use('/comment', commentRoute)

app.use('/', express.static(__dirname + '/frontend'))

//listening on
let PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})