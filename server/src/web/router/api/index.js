const apiRouter = require("express").Router();

//---- all: "./api" ----//
apiRouter.use("/users", require("./users"));
apiRouter.use("/auth", require("./auth"));
//----------------------//

apiRouter.use(function (err, req, res, next) {});

module.exports = apiRouter;
