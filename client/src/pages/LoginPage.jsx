import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions/login'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <label>Email: </label>
      <input
        type='email'
        name='email'
        placeholder='Enter email'
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <label>Password: </label>
      <input
        type='password'
        name='password'
        placeholder='Enter password'
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <button type='submit'>Sign in</button>
    </form>
  )
}

export default LoginPage
