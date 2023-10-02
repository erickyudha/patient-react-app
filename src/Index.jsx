import Navbar from './components/Navbar'
import PatientTable from "./components/PatientTable"
import "./Index.css"

function Index() {
    return (
        <>
            <Navbar />
            <div className='content'>
                <h1>Patient Room Database</h1>
                <PatientTable />
            </div>
        </>
    )
}

export default Index