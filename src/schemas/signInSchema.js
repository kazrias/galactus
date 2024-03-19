import * as yup from "yup"

export const signInSchema = yup.object().shape({
  signInEmail: yup.string().email("Enter valid email.").required("Required!"),
  signInPassword: yup.string().required("Required!"),
})
