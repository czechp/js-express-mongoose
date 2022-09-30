const mongoose = require("mongoose");

function idParamValidatorMiddleware(req, res, next) {
    const id = req.params.id;
    const idValidated = mongoose.Types.ObjectId.isValid(id);
    if (idValidated)
        next();
    else
        res
            .status(400)
            .json({message: "Incorrect id format"});
};

module.exports = idParamValidatorMiddleware;