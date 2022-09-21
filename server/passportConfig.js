const User = require("./models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const passport = require("passport");
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;


module.exports = function (passport) {
  passport.use(
    new localStrategy((email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        email: user.email,
      };
      cb(err, userInformation);
    });
  });
};

//Put sign-in info on config file when problem is fixed.
passport.use(new FacebookStrategy({
  clientID: '761783708288455',
  clientSecret: 'c53f2dba58ec5bc87670563f9f6aef69',
  callbackURL: "http://localhost:3000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));


passport.use(new GoogleStrategy({
  clientID:     '1060203266514-jpethige3djutikif4age7bjdb76l44a.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: "http://yourdomain:3000/auth/google/callback",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));