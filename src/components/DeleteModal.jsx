function DeleteModal() {
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
					<div className="modal-body">Delete data of patient PATIENT NAME HERE?</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button type="button" className="btn btn-danger">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal