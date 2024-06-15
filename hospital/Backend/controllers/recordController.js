const asyncHandler = require("express-async-handler");
const MedicineModel = require("../model/medicines");

exports.fetchAllRecords = asyncHandler(async (req, res) => {
  MedicineModel.find({})
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.error("Error fetching records:", err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching records" });
    });
});

exports.fetchAgeGroupMedicince = asyncHandler(async (req, res) => {
  const { medicine } = req.query;
  MedicineModel.find({ medicine_name: medicine })
    .select(["age_group1", "age_group2", "age_group3"])
    .then((ageGroups) => {
      res.json(ageGroups);
    })
    .catch((err) => {
      console.error("Error fetching age groups:", err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching age groups" });
    });
});

exports.fetchMeasure = asyncHandler(async (req, res) => {
  const { medicine, ageGroup } = req.query;
  MedicineModel.findOne({
    medicine_name: medicine,
    $or: [
      { age_group1: ageGroup },
      { age_group2: ageGroup },
      { age_group3: ageGroup },
    ],
  })
    .then((medicine) => {
      if (medicine) {
        res.json({ measure: medicine.measure });
      } else {
        res.status(404).json({
          error: "Measure not found for the specified medicine and age group",
        });
      }
    })
    .catch((err) => {
      console.error("Error fetching measure:", err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching measure" });
    });
});

exports.addMedicine = asyncHandler(async (req, res) => {
  const {
    medicineName,
    ageGroup1,
    ageGroup2,
    ageGroup3,
    measure,
    description,
  } = req.body;
  try {
    const newMedicine = new MedicineModel({
      medicine_name: medicineName,
      age_group1: ageGroup1,
      age_group2: ageGroup2,
      age_group3: ageGroup3,
      measure: measure,
      medicine_description: description,
    });
    await newMedicine.save();
    res.json({ message: "New medicine added successfully" });
  } catch (error) {
    console.error("Error adding new medicine:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding new medicine" });
  }
});
