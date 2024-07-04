import './App.css'
import { Route, Routes, } from 'react-router-dom'
import { Exp_C } from './components/Exp_C'
import { Portal } from './components/Portal'
import { Exp_A } from './components/Exp_A'
import { Exp_B } from './components/Exp_B'

function App() {
  return (
    <div style={{maxWidth:"650px"}}>
      <Routes>
        <Route path="" element={<Portal/>} />
        <Route path='ExpA_aiya1iZe' element={<Exp_A />} />
        <Route path='ExpB_Gaiph9Ol' element={<Exp_B />} />
        <Route path='Exp3_ouBa4eng' element={<Exp_C />} />
      </Routes>
    </div>
  )
}

export default App
