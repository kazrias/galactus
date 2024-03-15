

import { auth } from '../../../config/firebaseConfig'
import { useFormik } from "formik"
import { signInSchema } from "../../../schemas/signInSchema"
export const SignIn = () => {
  const onSubmit = async (values, actions) => {
    actions.resetForm()
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      signInEmail: '',
      signInPassword: '',
    },
    validationSchema: signInSchema,
    onSubmit,
  })


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
          {errors.signInPassword && touched.signInPassword && <span className="error">{errors.signInPassword}</span>}
        </label>

        <button disabled={isSubmitting} type="submit" className="register-signUp">Sign In</button>
      </form>
    </>
  )
}
