require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const GOOGLE_CALLBACK_URL = "http://localhost:8080/api/auth/google/callback";

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  await User.findById(id, (err, user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async function (req, accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          new User({
            googleId: profile.id,
            userName: profile.displayName,
            picture: profile.photos[0].value,
            email: profile.emails[0].value,
            emailVerified: profile.emails[0].verified,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);
