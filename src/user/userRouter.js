const express = require("express");
const userService = require("./userService");
const idParamValidatorMiddleware = require("./../configuration/express/middleware/idParamValidatorMiddleware");
const sendOr404 = require("../configuration/express/sender/sendOr404");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    const users = await userService.findAllUsers();
    res.json(users);
});

userRouter.get("/:id", idParamValidatorMiddleware, async (req, res) => {
    const userId = req.params.id;
    const user = await userService.findUserById(userId);
    sendOr404(res, user);
});

userRouter.post("/", async (req, res) => {
    const requestBody = req.body;
    try {
        const createdUser = await userService.createUser(requestBody);
        res
            .status(201)
            .json(createdUser);
    } catch (e) {
        res
            .status(400)
            .json({message: e.message})
    }
})

userRouter.delete("/:id", idParamValidatorMiddleware, async (req, res) => {
    const userId = req.params.id;
    const removedUser = await userService.removeUserById(userId);
    sendOr404(res, removedUser);
})

module.exports = userRouter;