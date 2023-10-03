import { useNavigate } from "react-router-dom";

function DeleteModal({deletePatientData, patientData}) {

	console.log(deletePatientData)
	let history = useNavigate()

    // Deleted function - functionality 
    // for deleting the entry
    function deleted(id) {
		console.log(id)
        var index = patientData.map(function (e) { 
            return e.id; }).indexOf(id);
  
        // deleting the entry with index
        patientData.splice(index, 1)
  
        // We need to re-render the page for getting 
        // the results so redirect to same page.
        history('/')
    }
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
							Confirm Delete Patient Data
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">Delete data of patient </div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button type="button" className="btn btn-danger" onClick={e => deleted(deletePatientData.patientID)}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal