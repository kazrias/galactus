import './Login.css'
import { useState } from 'react'
import { SignUp } from './SignUp/SignUp'
import { SignIn } from './SingIn/SignIn'

const Login = () => {
  const [signUpClicked, setSignUpClicked] = useState(false)
  return (
    <div className='login'>
      <div className="form-login">
        <div className='form-login__btns'>
          <button onClick={() => setSignUpClicked(false)}>Sign In</button>
          <button onClick={() => setSignUpClicked(true)}>Sign Up</button>
          <div className={`form-login__btns-active ${signUpClicked ? 'signUp' : ''}`}></div>
        </div>
        <div className={`login-wrapper ${signUpClicked ? 'active' : ''}`}>
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div >
  )
}

export default Login