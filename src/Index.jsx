import { useState } from "react";
import DeleteModal from "./components/DeleteModal";
import Navbar from "./components/Navbar";
import PatientTable from "./components/PatientTable";
import patientData from "./data/PatientData";
import "./index.css";

function Index() {
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
        <PatientTable patientData={patientData} deleteCallback={setSelectedDeletePatient} />
        <DeleteModal selectedPatientID={selectedDeletePatient} handleRefresh={handleRefresh} />
      </div>
    </>
  );
}

export default Index;
