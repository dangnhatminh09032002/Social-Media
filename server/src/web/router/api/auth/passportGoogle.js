const passportGoogleRouter = require("express").Router();
const passport = require("passport");

//---- all: "./api/auth/google" ----//
passportGoogleRouter.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

passportGoogleRouter.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res, next) => {
    res.json(req.user);
  }
);

module.exports = passportGoogleRouter;
