import { useEffect } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebaseConfig'
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { basicSchema } from "../../../schemas"
export const SignUp = ({ signUpClicked }) => {
  const navigate = useNavigate()
  const onSubmit = async (values, actions) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up 
        navigate('/')
        const user = userCredential.user;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    actions.resetForm()
  }

  const { values, errors, resetForm, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  })
  useEffect(() => {
    resetForm()
  }, [signUpClicked])

  return (
    <>
      <form onSubmit={handleSubmit} className="login-signUp">
        <label className="login-label">
          <input
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`login-email ${errors.email && touched.email ? "input-error" : ''}`}
            type="email"
            id="email"
            value={values.email}
            placeholder="Email" />
          {errors.email && touched.email && <span className="error">{errors.email}</span>}
        </label>
        <label className="login-label">
          <input
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`login-pass ${errors.password && touched.password ? "input-error" : ''}`}
            type="password"
            id="password"
            value={values.password}
            placeholder="Password" />
          {errors.password && touched.password && <span className="error">{errors.password}</span>}
        </label>
        <label className="login-label">
          <input
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`login-pass ${errors.confirmPassword && touched.confirmPassword ? "input-error" : ''}`}
            type="password"
            id="confirmPassword"
            value={values.confirmPassword}
            placeholder="Confirm password" />
          {errors.confirmPassword && touched.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </label>
        <button disabled={isSubmitting} type="submit" className="register-signUp">Sign Up</button>
      </form>
    </>
  )
}
