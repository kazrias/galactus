import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebaseConfig'
export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const signUpUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, pass)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    setEmail('')
    setPass('')
  }
  return (
    <>
      <h3 className="title title-signUp">Sign Up</h3>
      <form onSubmit={signUpUser} className="login-signUp">
        <label><input onChange={(e) => setEmail(e.target.value)} className="login-email" type="email" value={email} placeholder="Email" /></label>
        <label><input onChange={(e) => setPass(e.target.value)} className='login-pass' type="password" value={pass} placeholder="Password" /></label>
        <button className="register-signUp">Register</button>
      </form>
    </>
  )
}
