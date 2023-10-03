import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import patientData from "./data/PatientData.js";
import "./NewPatient.css";

function NewPatient() {
  const [patientID, setPatientID] = useState("")
  
  var today = new Date()
 
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  useEffect(() => {
    // Generate a random patient ID when the component mounts
    const randomID = generateRandomID();
    setPatientID(randomID);
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
    name: "",
    age: "",
    roomNumber: "",
    registeredDate: "",
  });

  const handleChange = (event) => {
    const target = event.currentTarget;

    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    // Fetching a value from usestate and
    // pushing to javascript object
    patientData.push({
      PatientID: patientID,
      Name: state.name,
      Age: state.age,
      RoomNumber: state.roomNumber,
      RegisteredDate: date,
    });

    // Redirecting to home page after creation done
    history("/");
  };

  // Get Patient Registered Date On Submit
  return (
    <>
      <Navbar />
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
                value={patientID}
                disabled
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
