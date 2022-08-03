import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions/register'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userSingUp = useSelector((state) => state.userSignUp)
  const { loading, error, userInfo } = userSingUp

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(register(name, email, password))
    console.log(userSingUp)
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='name'
          name='name'
          placeholder='Enter name'
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
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
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default RegisterPage
