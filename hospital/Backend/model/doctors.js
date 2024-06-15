const mongoose = require("mongoose");

const addDoctorScheme = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  specialty: {
    type: String,
    required: true,
    trim: true,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  //   weekdays: [
  //     {
  //       type: String,
  //       enum: [
  //         "Monday",
  //         "Tuesday",
  //         "Wednesday",
  //         "Thursday",
  //         "Friday",
  //         "Saturday",
  //         "Sunday",
  //       ],
  //     },
  //   ],
  //   timings: {
  //     Monday: {
  //       start: { type: String, trim: true },
  //       end: { type: String, trim: true },
  //     },
  //     Tuesday: {
  //       start: { type: String, trim: true },
  //       end: { type: String, trim: true },
  //     },
  //     Wednesday: {
  //       start: { type: String, trim: true },
  //       end: { type: String, trim: true },
  //     },
  //     Thursday: {
  //       start: { type: String, trim: true },
  //       end: { type: String, trim: true },
  //     },
  //     Friday: {
  //       start: { type: String, trim: true },
  //       end: { type: String, trim: true },
  //     },
  //     Saturday: {
  //       start: { type: String, trim: true },
  //       end: { type: String, trim: true },
  //     },
  //     Sunday: {
  //       start: { type: String, trim: true },
  //       end: { type: String, trim: true },
  //     },
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const doctorModel = mongoose.model("Doctor", addDoctorScheme);

module.exports = { doctorModel };
