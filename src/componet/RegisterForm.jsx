import React from 'react'

const RegisterForm = () => {
  return (
    <div>
        <h1>SignUp Form</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="">Email</label><br />
        <input type="Email" required placeholder='Email here...' /><br />
        <label htmlFor="">PassWord</label><br />
        <input type="password" required placeholder='Password here...' /><br />
        <button>SignUP</button>
      </form>
    </div>
  )
}

export default RegisterForm
