const asyncHandler = require("express-async-handler");
const { doctorModel } = require("../model/doctors");

// To add an doctor by the admin
exports.addDoctor = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, specialty, licenseNumber } =
    req.body;

  // Check if a doctor with the same email already exists
  const existingDoctor = await doctorModel.findOne({ email: email });
  if (existingDoctor) {
    return res.status(400).json({ message: "Email already exists" });
  }

  try {
    const newDoctor = new doctorModel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      specialty: specialty,
      licenseNumber: licenseNumber,
    });
    await newDoctor.save();
    res.json({ message: `Doctor ${firstName} ${lastName} added successfully` });
  } catch (error) {
    console.log(error);
  }
});

// exports.removeDoctor = asyncHandler(async (req, res) => {
//   const { doctorId } = req.params;

//   try {
//     const existingDoctor = await doctorModel.findByIdAndDelete(doctorId);
//     console.log(existingDoctor);

//     if (!existingDoctor) {
//       return res.status(404).json({ message: "Doctor not found" });
//     }

//     await doctorModel.deleteOne({ _id: doctorId });
//     res.json({ message: "Doctor removed successfully" });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "An error occurred while removing the doctor" });
//   }
// });

exports.removeDoctor = asyncHandler(async (req, res) => {
  const { doctorId } = req.params;

  try {
    const existingDoctor = await doctorModel.findByIdAndDelete(doctorId);

    if (!existingDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json({ message: "Doctor removed successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while removing the doctor" });
  }
});

exports.getAllDoctors = asyncHandler(async (req, res) => {
  try {
    const doctorList = await doctorModel.find();
    res.json({ message: "Fetched successfully!", doctors: doctorList });
  } catch (error) {
    console.log(error);
  }
});

exports.getDoctor = asyncHandler(async (req, res) => {
  const searchCriteria = req.query; // Extract search criteria from query parameters
  console.log({ searchCriteria: searchCriteria });
  try {
    const doctor = await doctorModel.find(searchCriteria);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(doctor);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the doctor" });
  }
});
