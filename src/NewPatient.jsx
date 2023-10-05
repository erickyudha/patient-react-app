/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./NewPatient.css";

function NewPatient({patientsData, setPatientData, handleRefresh}) {
  
  var today = new Date()
 
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  useEffect(() => {
    // Generate a random patient ID when the component mounts
    const randomID = generateRandomID();
    if (state.PatientID == "") {
      setState({
        ...state,
        PatientID: randomID
      })
    }
  }, []);

  const generateRandomID = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const idLength = 8;
    let randomID = "";

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomID += chars[randomIndex];
    }

    return randomID;
  };

  // Making usestate for setting and
  // fetching a value in jsx
  const [state, setState] = useState({
    PatientID: "",
    Name: "",
    Age: "",
    RoomNumber: "",
    RegisteredDate: "",
  });

  const handleChange = (event) => {
    const target = event.currentTarget;

    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload
    const patientDataCopy = patientsData

    // Fetching a value from usestate and
    // pushing to javascript object
    patientDataCopy.push({
      PatientID: state.PatientID,
      Name: state.name,
      Age: state.age,
      RoomNumber: state.roomNumber,
      RegisteredDate: date,
    });
    setPatientData(patientDataCopy)
    setState({
      PatientID: generateRandomID(),
      Name: "",
      Age: "",
      RoomNumber: "",
      RegisteredDate: "",
    })
    handleRefresh(true)
  };

  // Get Patient Registered Date On Submit
  return (
    <>
      <div className="content">
        <h1>New Patient Form</h1>
        <div id="patient-form">
          <div className="input-form">
            <div className="input-group">
              <label htmlFor="patient-id">Patient ID</label>
              <input
                type="text"
                id="patient-id"
                name="patient-id"
                onChange={handleChange}
                value={state.PatientID}
              />
            </div>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                onChange={handleChange}
                name="age"
              />
            </div>
            <div className="input-group">
              <label htmlFor="roomNumber">Room</label>
              <input
                type="text"
                id="roomNumber"
                onChange={handleChange}
                name="roomNumber"
              />
            </div>
          </div>
          <button className="btn btn-primary" onClick={handelSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default NewPatient;
