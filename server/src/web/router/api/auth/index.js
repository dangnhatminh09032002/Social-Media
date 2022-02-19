const authRouter = require("express").Router();

//---- all: "./api/auth" ----//
authRouter.use("/google", require("./passportGoogle"));
authRouter.use("/", require("./auth"));

module.exports = authRouter;
