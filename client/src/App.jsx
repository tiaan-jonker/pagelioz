import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome</h1>
        <Routes>
          <Route path='/' element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
