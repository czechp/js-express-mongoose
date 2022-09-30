const mongoose = require("mongoose");
const userSchema = require("./userSchema");

const UserModel = mongoose.model("users", userSchema);

async function warmup(){
    console.log(await UserModel.create({firstName: "First name 1", secondName: "Second name 1", email: "email1@gmail.com"}));
    console.log(await UserModel.create({firstName: "First name 2", secondName: "Second name 2", email: "email2@gmail.com"}));
    console.log(await UserModel.create({firstName: "First name 3", secondName: "Second name 3", email: "email3@gmail.com"}));
}

warmup();

module.exports = UserModel;