const express = require("express");
const app = express();

//User Router instead?

//api/auth/  <--originally had /auth in routes

//Routes to Authenticate Google and Facebook
app.get('/facebookreauthenticate',
  passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['user_friends', 'manage_pages'] }));
  
app.get('/facebook',
  passport.authenticate('facebook'));

app.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));