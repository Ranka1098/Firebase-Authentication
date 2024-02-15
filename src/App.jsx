import React from 'react'
import RegisterForm from './componet/RegisterForm'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="browser" element={<h1>Browser</h1>} />
      </Routes>
    </div>
  )
}

export default App
