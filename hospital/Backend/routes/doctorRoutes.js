const router = require("express").Router();
const {
  getAllDoctors,
  addDoctor,
  removeDoctor,
  getDoctor,
} = require("../controllers/doctorController");

router.get("/", getAllDoctors);
router.post("/add-doctor", addDoctor);
router.delete("/:doctorId", removeDoctor);
router.get("/search", getDoctor);

module.exports = router;
