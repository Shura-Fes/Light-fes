import './App.css'
import { Route, Routes, } from 'react-router-dom'
import { Exp_C } from './components/Exp_C'
import { Portal } from './components/Portal'
import { Exp_A } from './components/Exp_A'
import { Exp_B } from './components/Exp_B'
import { Hints_B } from './components/Hints_B'

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Portal />} />
        <Route path='ExpA_aiya1iZe' element={<Exp_A />} />
        <Route path='ExpB_Gaiph9Ol' element={<Exp_B />} />
        <Route path='Exp3_ouBa4eng' element={<Exp_C />} />
        <Route path='HintsB_ToZ5Ohgh' element={<Hints_B />} />
      </Routes>
    </>
  )
}

export default App
