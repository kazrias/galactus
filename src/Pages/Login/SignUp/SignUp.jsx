import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebaseConfig'
import { useFormik } from "formik"
import { basicSchema } from "../../../schemas"
export const SignUp = () => {



  const onSubmit = async (values, actions) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    actions.resetForm()
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  })


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
        <button disabled={isSubmitting} type="submit" className="register-signUp">Register</button>
      </form>
    </>
  )
}
