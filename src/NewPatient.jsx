import Navbar from "./components/Navbar"
import PatientForm from "./components/PatientForm"

function NewPatient() {
    return (
        <>
            <Navbar />
            <div className="content">
                <h1>New Patient Form</h1>
                <PatientForm />
            </div>
        </>
    )
}

export default NewPatient