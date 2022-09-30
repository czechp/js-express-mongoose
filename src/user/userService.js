const UserModel = require("./userModel");

function removeUserById(userId) {
    const removedUser = UserModel.findByIdAndRemove(userId);
    return removedUser;
}

function createUser(userToCreate) {
    const createUser = UserModel.create(userToCreate);
    return createUser;
}


function findUserById(userId) {
    const user = UserModel.findById(userId);
    return user;
}


function findAllUsers() {
    const users = UserModel.find();
    return users;
}


module.exports = {findAllUsers, findUserById, createUser, removeUserById}