const asyncHandler = require("express-async-handler");
// const mongoose = require("mongoose")
const { patientModel } = require("../model/patients");

exports.addPatient = asyncHandler(async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    address,
    medicalHistory,
    doctor,
  } = req.body;

  const patientExist = await patientModel.findOne({
    firstName,
    middleName,
    lastName,
  });
  try {
    if (patientExist) {
      res.status(400).json({ message: "Patient already exists" });
    } else {
      const newPatient = new patientModel({
        firstName,
        middleName,
        lastName,
        email,
        phoneNumber,
        dateOfBirth,
        gender,
        address,
        medicalHistory,
        doctor: doctor,
      });
      newPatient.save();
    }
    console.log(patientExist);
  } catch (error) {
    res.status(500).json({ message: "Failed to add patient" });
  }

  res.json({ patient: patientExist });
});
