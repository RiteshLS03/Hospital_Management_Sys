import React, { useEffect, useState } from "react";
import "./form.css";
import Swal from "sweetalert2";

const Form = () => {
  const [medicines, setMedicines] = useState([]);
  const [ageGroups, setAgeGroups] = useState([
    "1-2 Years",
    "2-5 Years",
    "5-10 Years",
  ]);
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState();
  const [newMedicine, setNewMedicine] = useState("");
  // Start
  const [newAgeGroup1, setNewAgeGroup1] = useState("");
  const [newAgeGroup2, setNewAgeGroup2] = useState("");
  const [newAgeGroup3, setNewAgeGroup3] = useState("");
  // End
  const [newMeasure, setNewMeasure] = useState("");
  const [measure, setMeasure] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchMedicines();
  }, []);

  // fetching all medicine data
  const fetchMedicines = async () => {
    try {
      const response = await fetch("http://localhost:8080/records");
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };
  // fetching age group by selected medicine
  const fetchAgeGroups = async (medicineName) => {
    try {
      const response = await fetch(
        `http://localhost:8080/records/age_groups?medicine=${medicineName}`
      );
      const data = await response.json();
      setAgeGroups(data);
    } catch (error) {
      console.error("Error fetching age groups:", error);
    }
  };
  // fetching its measure / dosage ex 1ml 2ml..,
  const fetchMeasure = async (medicineName, ageGroup) => {
    try {
      const response = await fetch(
        `http://localhost:8080/records/measure?medicine=${medicineName}&ageGroup=${ageGroup}`
      );
      const data = await response.json();
      setMeasure(data.measure);
    } catch (error) {
      console.error("Error fetching measure:", error);
    }
  };
  //handle onchange of medicine
  const handleMedicineChange = (e) => {
    const selectedMedicine = e.target.value;
    if (selectedMedicine === "Custom") {
      setDisabled(true);
      fetchAgeGroups("");
      setMeasure("");
    } else {
      setSelectedMedicine(selectedMedicine);
      fetchAgeGroups(selectedMedicine);
    }
  };
  //handle onchange of agegroup
  const handleAgeGroupChange = (e) => {
    const selectedAgeGroup = e.target.value;
    setSelectedAgeGroup(selectedAgeGroup);
    fetchMeasure(selectedMedicine, selectedAgeGroup);
  };

  // console.log(selectedMedicine)
  // console.log(selectedAgeGroup)

  //saving new medicine
  const submitData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/records/add_medicine",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            medicineName: newMedicine,
            ageGroup1: newAgeGroup1,
            ageGroup2: newAgeGroup2,
            ageGroup3: newAgeGroup3,
            measure: newMeasure,
            description: description,
          }),
        }
      );
      const data = await response.json();
      console.log("New medicine added:", data);
      // update the medicine list after adding the new medicine
      fetchMedicines();
      // success popup
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "New medicine added successfully.",
      });
    } catch (error) {
      console.error("Error adding new medicine:", error);
    }
  };
  const cancelData = () => {
    setDisabled(false);
  };

  return (
    <div className="formdiv">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleMedicineChange}
        disabled={disabled}
      >
        <option selected>Select Available Medicine</option>
        {medicines.map((med) => (
          <option key={med?._id} value={med?.medicine_name}>
            {med?.medicine_name}
          </option>
        ))}
        <option value="Custom">New Medicine</option>
      </select>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleAgeGroupChange}
        disabled={disabled}
      >
        <option selected>Select Age Group</option>
        {ageGroups.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <p>{measure && `Measure: ${measure}`}</p>
      {disabled && (
        <div className="newmed">
          <input
            type="text"
            placeholder="Enter New Medicine"
            onChange={(e) => setNewMedicine(e.target.value)}
          />
          {/* Start */}
          <input
            type="text"
            placeholder="Age 1-2 Years Dosage"
            onChange={(e) => setNewAgeGroup1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Age 2-5 Years Dosage"
            onChange={(e) => setNewAgeGroup2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Age 5-10 Years Dosage"
            onChange={(e) => setNewAgeGroup3(e.target.value)}
          />
          {/* End */}
          {/* No NEED of below input */}
          {/* <input
            type="text"
            placeholder="Enter Dosage"
            onChange={(e) => setNewMeasure(e.target.value)}
          /> */}
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Enter Decsription for medicine"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={() => cancelData()}>Cancel</button>
          <button onClick={() => submitData()}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Form;
