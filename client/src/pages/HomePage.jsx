import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/register')
  }

  return (
    <div>
      <h1>Page for page better than anything else.</h1>
      <p>Not a member yet?</p>
      <button onClick={handleClick}>Join now</button>
    </div>
  )
}

export default HomePage
