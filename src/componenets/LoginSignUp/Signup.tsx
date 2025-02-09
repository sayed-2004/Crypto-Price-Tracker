import React from 'react'
import './Login.css'

const Signup = () => {
  return (
    <div>
      <div className="loginContainer">
            <div className="login-box">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Sign Up</button>
                <hr></hr>
                <p>Already have an account? <a href="#">Login</a></p>
            </div>
        </div>
    </div>
  )
}

export default Signup
