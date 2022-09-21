const router = require("express").Router();
//const userController = require("../../controllers/userController");
const Account = require("../../models/account");
var passport = require('passport');
// Matches with "/api/user"
/*
router
  .route("/")

  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


  //userController.signup???
router.route("/signup").post(userController.create);

//router.route("/login").post(userController.login).get(userController.login);

router.route("/logout");

*/

router.post('/register', function (req, res) {
  Account.register(new Account({ email: req.body.email, /*firstName: req.body.firstName, lastName: req.body.lastName*/}), req.body.password, function (err, account) {
    if (err) {
      return res.send('Error: ' + err);
    }

    passport.authenticate('local'), function (req, res) {
      res.send("User Created.");
    }
  });
});

router.post("/test", function (req, res) {
  res.send("User Created.");
});

/*
  router.post('/login', passport.authenticate('local'), function (req, res) {
    res.send("Logged In.");
  });
*/
  router.post('/login', function (req, res) {
    if (err) {
      return res.send('Error: ' + err);
    }
  passport.authenticate('local'), function (req, res) {
    res.send("User Created.");
  }
  });

  module.exports = router;
