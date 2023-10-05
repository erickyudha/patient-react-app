import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewPatient from './NewPatient.jsx'
import NotFound from './NotFound.jsx'
import Index from './Index.jsx'
import patientData from './data/PatientData.js'
import { useState } from 'react'

function App() {
  const [patientsData, setPatientData] = useState(null)
  if (patientsData == null || patientsData == []) {
    setPatientData(patientData)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Index patientsData={patientsData} setPatientData={setPatientData} />} />
          <Route path='new' element={<NewPatient patientsData={patientsData} setPatientData={setPatientData} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
