const cookieParser = require("cookie-parser");
const errorhandler = require("errorhandler");
const session = require("express-session");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const mongoConnect = require("./src/configs/db.config");

// Create global app object
const app = express();
mongoConnect();

// Init variable ENV
const {
  HTTP_ONLY = false,
  PORT = 8080,
  SES_NAME = "sid",
  SES_SECRET = "secret",
  SECRET = "secret",
  NODE_ENV = "development",
  CSRF_KEY = "_csurf", // session name = Set ID
  CSRF_LIFETIME = 1000 * 60 * 60 * 2, // Two hour
  SES_LIFETIME = 1000 * 60 * 60 * 2,
} = process.env;
const IN_PRODUCT = NODE_ENV === "production" || false;
const isProduction = process.env.NODE_ENV === "production";

// Normal express config defaults
if (NODE_ENV === "development") app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    name: SES_NAME,
    secret: SES_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: HTTP_ONLY,
      maxAge: SES_LIFETIME,
      secure: IN_PRODUCT,
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));

if (!isProduction) {
  app.use(errorhandler());
}

// Router for server
const web = require("./src/web");
web(app);

// Run listening server
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
