import './Login.css'
import { useEffect, useState } from 'react'
import { SignUp } from './SignUp/SignUp'
import { SignIn } from './SingIn/SignIn'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [signUpClicked, setSignUpClicked] = useState(false)
  const logged = useSelector(state => state.app.loggedUser.logged)
  console.log(logged);
  const navigate = useNavigate()
  useEffect(() => {
    if (logged) {
      navigate('/')
    }
  }, [logged])
  return (
    <div className='login'>
      <div className="form-login">
        <div className='form-login__btns'>
          <button onClick={() => setSignUpClicked(false)}>Sign In</button>
          <button onClick={() => setSignUpClicked(true)}>Sign Up</button>
          <div className={`form-login__btns-active ${signUpClicked ? 'signUp' : ''}`}></div>
        </div>
        <div className={`login-wrapper ${signUpClicked ? 'active' : ''}`}>
          <SignIn signUpClicked={signUpClicked} />
          <SignUp signUpClicked={signUpClicked} />
        </div>
      </div>
    </div >
  )
}

export default Login