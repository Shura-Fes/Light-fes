import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Exp3 } from './components/Exp3'

function App() {
  return (
    <>
      <Routes>
        <Route path='/Exp3_ouBa4eng' element={<Exp3 />} />
      </Routes>
    </>
  )
}

export default App
