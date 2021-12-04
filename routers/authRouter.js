const router = require("express").Router();

router.get("/v1/information");
router.get("/v1/users");

router.post("users/register");
router.post("users/login");
router.post("users/token");
router.post("users/tokenValidate");
router.post("users/logout");

module.exports = router;
