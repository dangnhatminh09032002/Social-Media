const usersRouter = require("express").Router();

//---- all: "./api/users" ----//
usersRouter.get("/login", (req, res, next) => {
  res.send("User /login");
  next();
});

usersRouter.use("/", (req, res, next) => {
  next();
});
//---------------------------//

usersRouter.use((err, req, res, next) => {});

module.exports = usersRouter;
