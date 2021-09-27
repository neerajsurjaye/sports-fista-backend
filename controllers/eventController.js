let event = require('../models/event')

exports.getEvents = async (req, res) => {

    let page = req.params.page;

    if (page <= 0) {
        res.json({
            err: "bad value"
        })
        return
    }

    event.paginate({}, {
        page: page,
        limit: 10,
        populate: { path: 'user', select: 'username' }
    }, (err, data) => {

        if (err) {
            res.json({ err: err })
            retrun
        }


        res.json({ success: data })

    })

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

exports.getEventDetails = async (req, res) => {
    let eventId = req.params.eventId;

    let currEvent = event.findOne({ _id: eventId })
    currEvent.populate({ path: "user", select: "_id username" })
        .populate({ path: "comments" })

    currEvent = await currEvent

    res.json({
        "success": currEvent
    })

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