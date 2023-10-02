function PatientTable() {
	return (
		<table className="table table-striped table-bordered">
			<thead>
				<tr>
					<th scope="col">No</th>
					<th scope="col">Patient ID</th>
					<th scope="col">Name</th>
                    <th scope="col">Age</th>
					<th scope="col">Room Number</th>
                    <th scope="col">Registered Date</th>
                    <th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>12334</td>
					<td>Erick Yudha Pratama Sukku</td>
                    <td>21</td>
					<td>VIP-1</td>
                    <td>2023-10-01</td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
				</tr>
			</tbody>
		</table>
	);
}

export default PatientTable;
