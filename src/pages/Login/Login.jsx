import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"
import Home from "../Home/Home"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, loading, error: authError } = useAuthentication()


  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    const user = {
      email,
      password
    }

    const res = await login(user)
    console.log(res)
    
  }

  // Updates error always authError updates
  useEffect(() => {
    if (authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <Home>
      <form onSubmit={handleSubmit}>
        <h1>Login<span>.</span></h1>
        <label>
          Email:
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            required />
        </label>
        {!loading ? (
          <button className='btn'>Login</button>
        ) : (
          <button className='btn' disabled >Wait...</button>
        )}
        {error && (
          <p className="error">{error}</p>
        )}
      </form>
    </Home>
  )
}

export default Login