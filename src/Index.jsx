/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteModal from "./components/DeleteModal";
import Navbar from "./components/Navbar";
import PatientTable from "./components/PatientTable";
import "./index.css";
import NewPatient from "./NewPatient";

function Index({patientsData, setPatientData}) {
  const [selectedDeletePatient, setSelectedDeletePatient] = useState(null)
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Patient Room Database</h1>
        <PatientTable patientData={patientsData} deleteCallback={setSelectedDeletePatient} />
        <NewPatient patientsData={patientsData} setPatientData={setPatientData} handleRefresh={handleRefresh} />
        <DeleteModal selectedPatientID={selectedDeletePatient} handleRefresh={handleRefresh} patientData={patientsData} setPatientData={setPatientData} />
      </div>
    </>
  );
}

export default Index;
