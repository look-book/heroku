const path = require("path");
const express = require("express");
const { cloudinary } = require("./utils/cloudinary");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
//const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
var LocalStrategy = require('passport-local').Strategy;


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
//app.use(cookieParser("keyboard cat"));
//require("./passportConfig")(passport);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// Connect to the Mongo DB
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb+srv://LkBkLogin:LkBkLgn999@lkbklogin.dijafqg.mongodb.net/?retryWrites=true&w=majority',

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB is Connected."))
  .catch((err) => console.log(err));


app.get("/test", function(req, res) {res.send("Confirmed")});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});