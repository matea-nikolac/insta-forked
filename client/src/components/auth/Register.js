import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [formFields, setFormFields] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formFields)
      // const response = await axios.post('/api/login', formFields)
      // localStorage.setItem('My Token', response.data.token)
      // console.log(response.data.token)
      // navigate('/')
    } catch (err) {
      console.log(err)
    }
  }


  return (

    <div className='form-container'>
      <div className="register-border">
        <form action="" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="username"></label>
          <input type="text" name="username" placeholder='username' onChange={handleChange} value={formFields.username} />
          <label htmlFor="email"></label>
          <input type="email" name="email" placeholder="email address" onChange={handleChange} value={formFields.email} />
          <label htmlFor="password"></label>
          <input type="password" name="password" placeholder="password" onChange={handleChange} value={formFields.password} />
          <label htmlFor="passwordConfirmation"></label>
          <input type="password" name="passwordConfirmation" placeholder='confirm password' onChange={handleChange} value={formFields.passwordConfirmation} />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register