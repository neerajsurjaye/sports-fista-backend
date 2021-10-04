const comment = require("../models/comment")
const event = require("../models/event")

exports.addComment = async (req, res) => {

    let eventId = req.body.event
    let currUser = req.user
    let body = req.body
    console.log(body);
    console.log("Comment Controller : " , eventId , currUser)

    let newComment = new comment({
        userid: currUser._id,
        desc: body.desc
    })

    let savedComment = await newComment.save();

    let currEvent = await event.findOneAndUpdate({ _id: eventId }, { $push: { comments: savedComment._id } })

    res.json({ success: currEvent });
}

