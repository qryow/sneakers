import React from 'react'

const Register = () => {
  return (
    <div>
        <input type="email" placeholder='email@'/>
        <input type="text" placeholder='User Name'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Password confirm'/>
        <button>Register</button>
    </div>
  )
}

export default Register