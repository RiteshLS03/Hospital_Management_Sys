// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const MedicineModel = require("./model/medicines");

// const app = express();
// const PORT = 8080;

// app.use(express.json());
// app.use(cors());

// // connecting db
// mongoose
//   .connect("mongodb://localhost:27017/Pharma", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     startServer();
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

// // fetch records on this route
// function startServer() {
//   app.get("/records", (req, res) => {
//     MedicineModel.find({})
//       .then((docs) => {
//         res.json(docs);
//       })
//       .catch((err) => {
//         console.error("Error fetching records:", err);
//         res
//           .status(500)
//           .json({ error: "An error occurred while fetching records" });
//       });
//   });

//   //   fetch age groups route
//   app.get("/records/age_groups", (req, res) => {
//     const { medicine } = req.query;
//     MedicineModel.find({ medicine_name: medicine })
//       // .distinct("age_Group")
//       .select(["age_group1", "age_group2", "age_group3"])
//       .then((ageGroups) => {
//         res.json(ageGroups);
//       })
//       .catch((err) => {
//         console.error("Error fetching age groups:", err);
//         res
//           .status(500)
//           .json({ error: "An error occurred while fetching age groups" });
//       });
//   });

//   //   fetch age measure/dosage
//   app.get("/records/measure", (req, res) => {
//     const { medicine, ageGroup } = req.query;
//     MedicineModel.findOne({
//       medicine_name: medicine,
//       age_group1: ageGroup1,
//       age_group2: ageGroup2,
//       age_group3: ageGroup3,
//     })
//       .then((medicine) => {
//         if (medicine) {
//           res.json({ measure: medicine.measure });
//         } else {
//           res.status(404).json({
//             error: "Measure not found for the specified medicine and age group",
//           });
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching measure:", err);
//         res
//           .status(500)
//           .json({ error: "An error occurred while fetching measure" });
//       });
//   });

//   //   save new record in db
//   app.post("/records/add_medicine", async (req, res) => {
//     const {
//       medicineName,
//       ageGroup1,
//       ageGroup2,
//       ageGroup3,
//       measure,
//       description,
//     } = req.body;
//     try {
//       const newMedicine = new MedicineModel({
//         medicine_name: medicineName,
//         age_group1: ageGroup1,
//         age_group2: ageGroup2,
//         age_group3: ageGroup3,
//         measure: measure,
//         medicine_description: description,
//       });
//       await newMedicine.save();
//       res.json({ message: "New medicine added successfully" });
//     } catch (error) {
//       console.error("Error adding new medicine:", error);
//       res
//         .status(500)
//         .json({ error: "An error occurred while adding new medicine" });
//     }
//   });
//   //  starting server on port
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }

// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

// Import routes

// Use routes
app.use("/records", require("./routes/recordRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/doctor", require("./routes/doctorRoutes"));
app.use("/patient", require("./routes/patientRoutes"));
// app.use("/admin", require("./routes/adminRoutes"));

// Connect to MongoDB and start the server
mongoose
  .connect("mongodb://localhost:27017/Pharma", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
