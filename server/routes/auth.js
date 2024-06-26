const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.register);
router.post("/login", authController.login);
router.get("/authrization", authController.authrization);

module.exports = router;
