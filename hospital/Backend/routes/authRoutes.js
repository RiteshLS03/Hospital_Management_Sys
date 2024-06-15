const router = require("express").Router();

router.get("/admin", (req, res) => res.send({ msg: "verifying the auth" }));
router.get("/user", (req, res) => res.send({ msg: "verifying the auth" }));
router.get("/patient", (req, res) => res.send({ msg: "verifying the auth" }));
router.get("/doctor", (req, res) => res.send({ msg: "verifying the auth" }));

module.exports = router;
