import { useNavigate } from "react-router-dom";
function PatientTable({ patientData }) {
  let history = useNavigate();

  // Deleted function - functionality
  // for deleting the entry
  function deleted(id) {
    console.log(id);
    var index = patientData
      .map(function (e) {
        return e.PatientID;
      })
      .indexOf(id);

    // deleting the entry with index
    patientData.splice(index, 1);

    // We need to re-render the page for getting
    // the results so redirect to same page.
    history("/");
  }

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
                  onClick={(e) => deleted(item.PatientID)}
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
