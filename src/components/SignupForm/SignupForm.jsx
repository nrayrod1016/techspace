import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  })
  
  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }
  
  const { name, email, password, passwordConf } = formData
  
  //  must add formInvalid to button disabled removed due to bug 
  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
  <form
    autoComplete="off"
    onSubmit={handleSubmit}
    >
    <div class='mb-3'>
      <label htmlFor="name" className=''>Name</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          class="form-control"
        />
    </div>
  <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange} 
          class="form-control"
          aria-describedby="emailHelp" 
        />
  </div>
  <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
        <input  type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
          class="form-control" 
        />
  </div>
  <div className=''>
      <label htmlFor="confirm" className=''>Confirm Password</label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          class="form-control"
        />
      </div>
  <div className=''>
  
        <button disabled={``} class="btn btn-primary m-1">Sign Up</button>
        <Link to="/">
          <button class="btn btn-danger m-1">Cancel</button>
        </Link>
      </div>
    </form>
  );
}
 
export default SignupForm;