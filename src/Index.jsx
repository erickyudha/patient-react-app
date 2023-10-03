import Navbar from "./components/Navbar";
import PatientTable from "./components/PatientTable";
import patientData from "./data/PatientData";
import "./index.css";

function Index() {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Patient Room Database</h1>
        <PatientTable patientData={patientData} />
      </div>
    </>
  );
}

export default Index;
