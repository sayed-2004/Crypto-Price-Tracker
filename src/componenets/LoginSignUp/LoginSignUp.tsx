import React from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div>
        <div className="loginContainer">
            <div className="login-box">
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <hr></hr>
                <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp
