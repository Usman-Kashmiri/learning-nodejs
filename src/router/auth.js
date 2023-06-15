const router = require("express").Router();
const auth = require("../controllers/authController.js");

router.post("/signup", auth.signup);
router.post("/login", auth.login);
router.post("/logout", auth.logout);

module.exports = router;
