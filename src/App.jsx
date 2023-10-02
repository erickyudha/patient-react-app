import './App.css'
import Navbar from './components/Navbar'
import PatientTable from "./components/PatientTable"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='content'>
        <h1>Patient Room Database</h1>
        <PatientTable></PatientTable>
      </div>
    </>
  )
}

export default App
