require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");

mongoose
  .connect(
    "mongodb+srv://pelusa:amqlichita@cluster0-bnvxq.mongodb.net/test?retryWrites=true&w=majoritymongodb+srv://pelusa:amqlichita@cluster0-bnvxq.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

const corsOptions = {
  origin: function(origin, callback) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  enablePreflight: true
};

const whitelist = "https://suspicious-villani-0c139b.netlify.com";

//este cors es la configyracion inicial
app.use(
  cors({
    origin: whitelist,
    credentials: true
  })
);

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "blabla",
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));

const index = require("./routes/index");
const auth = require("./routes/auth");
app.use("/api", index);
app.use("/api", auth);

module.exports = app;
