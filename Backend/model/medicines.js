// creating model for schema of data
const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
  medicine_name: String,
  age_group1: String,
  age_group2: String,
  age_group3: String,
  medicine_description: String,
  measure: String,
});

const MedicineModel = mongoose.model("medicine_details", MedicineSchema);

module.exports = MedicineModel;
