let event = require('../models/event')

exports.getEvents = async (req, res) => {

    let currEvents = await event.find().populate('user', 'username')

    // console.log(currEvents); 

    res.json(currEvents)
}

exports.isOrg = (req, res, next) => {
    let user = req.user

    if (user.isOrgnization) {
        next();
        return;
    }

    res.json({
        err: "Not an orgnization"
    })
}

exports.getEventDetails = (req, res) => {
    res.send("event : " + req.params.eventid)
}

exports.createEvent = async (req, res) => {
    let currEvent = req.body
    let user = req.user

    console.log(currEvent);
    console.log(user)

    let newEvent = new event({
        title: currEvent.title,
        desc: currEvent.desc,
        user: user._id
    })

    let curr = await newEvent.save()

    res.json(curr)
}