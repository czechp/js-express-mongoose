const ExpressServer = require("./src/configuration/express/ExpressServer");
const connectToMongo = require("./src/configuration/mongoose/connectToMongo");
const  PORT = 8080;

const userRouter = require("./src/user/userRouter");

const expressServer = new ExpressServer(PORT);
expressServer.addRouter("/api/users", userRouter);


connectToMongo("mongodb://localhost");
expressServer.startServer();