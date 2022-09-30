const mongoose = require("mongoose");

function connectToMongo(url) {
    mongoose.connect(url,
        () => {
            console.log(`Connected to ${url}`);
        },
        (error) => {
            console.log(`Connecting to ${url} failed`);
        }
    );

}

module.exports = connectToMongo;