exports.getEvents = (req, res) => {
    res.send("page : " + req.params.page)
}

exports.getEventDetails = (req, res) => {
    res.send("event : " + req.params.eventid)
}