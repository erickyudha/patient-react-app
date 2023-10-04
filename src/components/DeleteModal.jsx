import { useEffect, useState } from "react";
import patientData from "../data/PatientData";

/* eslint-disable react/prop-types */
function DeleteModal({ selectedPatientID, handleRefresh }) {
	const [selectedPatient, setSelectedPatient] = useState(null);

	const getPatientByID = (id) => {
		const patient = patientData.find((patient) => patient.PatientID === id);
		return patient || null; // Return null if no patient with the specified ID is found
	};

	

	const deletePatientByID = (id) => {
		const index = patientData.findIndex(
			(patient) => patient.PatientID === id
		);

		if (index !== -1) {
			// Patient with the specified ID exists; remove it from the array
			patientData.splice(index, 1);
		}

		handleRefresh(true)
	};

	const handleDeleteClick = () => {
		deletePatientByID(selectedPatientID)
	}

	useEffect(() => {
		setSelectedPatient(getPatientByID(selectedPatientID));
	}, [selectedPatientID]);

	return (
		<div
			className="modal fade"
			id="deleteModal"
			tabIndex="-1"
			aria-labelledby="deleteModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="deleteModalLabel">
							Confirm Delete
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						Remove {(selectedPatient == null) ? "" : selectedPatient.Name} from entries?
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button type="button" className="btn btn-danger" onClick={handleDeleteClick} data-bs-dismiss="modal">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
