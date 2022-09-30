const express = require("express");

class ExpressServer {
    #port;
    #app;
    function

    constructor(port) {
        this.#port = port;
        this.#app = express();
        this.#configureServer();
    }

    #configureServer = () => {
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({extended: false}));
    }

    #handleErrors = (error, req, res, next) => {
        res
            .status(500)
            .json({message: error.message})
    }

    addRouter(path, router) {
        this.#app.use(path, router);
    };

    startServer() {
        this.#app.use(this.#handleErrors);
        this.#app.listen(this.#port, () => {
            console.log(`Server is listening at port: ${this.#port}`)
        });
    }

}

module.exports = ExpressServer;