function sendOr404(res, body, status = 200) {
    if (body)
        res.status(status)
            .json(body);
    else
        res.status(404)
            .json({message: `Element does not exists`, timestamp: new Date()});
}

module.exports = sendOr404;