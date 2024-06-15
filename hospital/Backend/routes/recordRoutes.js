// routes/records.js
const express = require("express");
const router = express.Router();
const {
  fetchAllRecords,
  fetchAgeGroupMedicince,
  fetchMeasure,
  addMedicine,
} = require("../controllers/recordController");

// Fetch all records
router.get("/", fetchAllRecords);

// Fetch age groups for a specific medicine
router.get("/age_groups", fetchAgeGroupMedicince);

// // Fetch measure/dosage for a specific medicine and age group
router.get("/measure", fetchMeasure);

// // Save a new record in the database
router.post("/add_medicine", addMedicine);

module.exports = router;
