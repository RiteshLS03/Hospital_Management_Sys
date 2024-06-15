const router = require("express").Router();
const { addPatient } = require("../controllers/patientController");

router.post("/add-patient", addPatient);

module.exports = router;
