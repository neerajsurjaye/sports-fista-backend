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
        sort: { date: -1 },
        page: page,
        limit: 10,
        populate: { path: 'user', select: 'username' },
        select: "-about -comments"
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
        .populate({
            path: "comments",
            sort: { date: -1 },
            populate: { path: 'userid', select: 'username' }
        })

    currEvent = await currEvent

    res.json({
        "success": currEvent
    })

}

exports.createEvent = async (req, res) => {
    //make seprate upload image
    let currEvent = req.body
    let user = req.user

    // console.log('req body', req.body);


    let newEvent = new event({
        title: currEvent.title,
        desc: currEvent.desc,
        about: currEvent.about,
        user: user._id,
        images: currEvent.images
    })

    let curr = await newEvent.save()

    res.json(curr)

}

exports.uploadEventImage = (req, res) => {
    res.json({ success: req.file.filename })
}