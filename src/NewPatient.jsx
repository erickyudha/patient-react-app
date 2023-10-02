import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import "./NewPatient.css"

function NewPatient() {
    const [patientID, setPatientID] = useState('');

    useEffect(() => {
        // Generate a random patient ID when the component mounts
        const randomID = generateRandomID();
        setPatientID(randomID);
    }, []);

    const generateRandomID = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 8;
        let randomID = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            randomID += chars[randomIndex];
        }

        return randomID;
    }

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
                            <label htmlFor="patient-name">Name</label>
                            <input
                                type="text"
                                id="patient-name"
                                name="patient-name"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="patient-age">Age</label>
                            <input
                                type="number"
                                id="patient-age"
                                name="patient-age"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="patient-room">Room</label>
                            <input
                                type="text"
                                id="patient-room"
                                name="patient-room"
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary">Submit</button>
				</div>
			</div>
		</>
	);
}

export default NewPatient;
