
export const SignIn = () => {
  return (
    <>
      <h3 className="title title-signUp"></h3>
      <form className="login-signIn">
        <label>Email<input onChange={(e) => setEmail(e.target.value)} className="login-email" type="email" value={email} /></label>
        <label>Password<input onChange={(e) => setPass(e.target.value)} className='login-pass' type="password" value={pass} /></label>
        <button>Register</button>
      </form>
    </>
  )
}
