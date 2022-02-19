const authRouter = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../../../../models/User");

//---- all: "./api/auth" ----//
authRouter.post("/register", async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(404).send("Email already exists");
      return;
    }

    // Create new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      hash: hashedPassword,
    });

    // Save user and respond
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(505).json(err);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    if (!req.body.email) {
      res.send("You have not entered your email");
    }
    if (!req.body.password) {
      res.send("You have not entered your password");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send("Email or password is incorrect");
      return;
    }

    const vaildPassword = await bcrypt.compare(req.body.password, user.hash);

    if (!vaildPassword) {
      res.status(404).send("Email or password is incorrect");
      return;
    }
    res.status(200).json(user);
  } catch (error) {}
});
//---------------------------//
module.exports = authRouter;
