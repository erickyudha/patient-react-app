import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewPatient from './NewPatient.jsx'
import NotFound from './NotFound.jsx'
import Index from './Index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Index />} />
          <Route path='new' element={<NewPatient />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
