import Home from "../Home/Home"

const Login = () => {
  return (
    <Home>
      <form>
        <h1>Login<span>.</span></h1>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button className="btn">Login</button>
      </form>
    </Home>
  )
}

export default Login