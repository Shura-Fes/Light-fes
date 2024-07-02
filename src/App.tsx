import './App.css'
import { Route, Routes, } from 'react-router-dom'
import { Exp_C } from './components/Exp_C'
import { Portal } from './components/Portal'

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Portal/>} />
        <Route path='Exp3_ouBa4eng' element={<Exp_C />} />
      </Routes>
    </>
  )
}

export default App
