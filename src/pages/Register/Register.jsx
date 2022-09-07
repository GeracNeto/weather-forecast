import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"
import Home from "../Home/Home"

const Register = () => {

    const {createUser, error: authError, loading} = useAuthentication()

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setCofirmPassword] = useState('')
    const [error, setError] = useState('')

    // Send form
    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        if (password !== confirmPassword) {
            setError('Password does not match!')

            setPassword('')
            setCofirmPassword('')

            return
        }

        const user = {
            displayName,
            email,
            password
        }

        const res = await createUser(user)
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
                <h1>Create new account<span>.</span></h1>
                <label>
                    Name:
                    <input
                        type="text"
                        onChange={e => setDisplayName(e.target.value)}
                        value={displayName}
                        required />
                </label>
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
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        onChange={e => setCofirmPassword(e.target.value)}
                        value={confirmPassword}
                        required />
                </label>
                {!loading ? (
                    <button className='btn'>Register</button>
                ) : (
                    <button className='btn' disabled >Creating user...</button>
                )}
                {error && (
                    <p className="error">{error}</p>
                )}
            </form>
        </Home>
    )
}

export default Register