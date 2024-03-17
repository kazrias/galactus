

import { auth } from '../../../config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { signInSchema } from "../../../schemas/signInSchema"
import { useEffect, useState } from 'react'
export const SignIn = ({ signUpClicked }) => {
  const [wrongData, setWrongData] = useState(false)
  const navigate = useNavigate()
  const onSubmit = async (values, actions) => {
    await signInWithEmailAndPassword(auth, values.signInEmail, values.signInPassword)
      .then((userCredential) => {
        navigate('/')
        const user = userCredential.user;
        console.log(user);
        setWrongData(false)
        actions.resetForm()
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setWrongData(true)
        actions.setFieldValue('signInPassword', '');
      });

  }

  const { values, errors, resetForm, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      signInEmail: '',
      signInPassword: '',
    },
    validationSchema: signInSchema,
    onSubmit,
  })
  useEffect(() => {
    resetForm()
  }, [signUpClicked])

  return (
    <>
      <form onSubmit={handleSubmit} className="login-signIn">
        <label className="login-label">
          <input
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`login-email ${errors.signInEmail && touched.signInEmail ? "input-error" : ''}`}
            type="email"
            id="signInEmail"
            value={values.signInEmail}
            placeholder="Email" />
          {errors.signInEmail && touched.signInEmail && <span className="error">{errors.signInEmail}</span>}
        </label>
        <label className="login-label">
          <input
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`login-pass ${errors.signInPassword && touched.signInPassword ? "input-error" : ''}`}
            type="password"
            id="signInPassword"
            value={values.signInPassword}
            placeholder="Password" />
          {!wrongData && errors.signInPassword && touched.signInPassword && <span className="error">{errors.signInPassword}</span>}
          {wrongData && <span className="error">Wrong email or password</span>}
        </label>

        <button disabled={isSubmitting} type="submit" className="register-signUp">Sign In</button>
      </form>
    </>
  )
}
