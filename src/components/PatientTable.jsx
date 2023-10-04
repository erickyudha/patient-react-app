/* eslint-disable react/prop-types */
function PatientTable({ patientData, deleteCallback }) {
  const handleDeleteClick = id => {
    deleteCallback(id)
  }

  return (
    <table className="table table-striped table-bordered">
      <thead align="center">
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
        {patientData.map((item, i) => {
          return (
            <tr key={item.PatientID}>
              <th scope="row">{i + 1}</th>
              <td>{item.PatientID}</td>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.RoomNumber}</td>
              <td>{item.RegisteredDate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  data-bs-toggle="modal" data-bs-target="#deleteModal"
                  onClick={() => handleDeleteClick(item.PatientID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PatientTable;
