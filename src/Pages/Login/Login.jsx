import './Login.css'
import { useState } from 'react'
import { SignUp } from './SignUp/SignUp'
import { SignIn } from './SingIn/SignIn'

const Login = () => {
  const [signUpClicked, setSignUpClicked] = useState(false)
  return (
    <div className='login'>
      <div className="form-login">
        {signUpClicked && <SignIn />}
        {!signUpClicked && <SignUp />}
      </div>
    </div>
  )
}

export default Login