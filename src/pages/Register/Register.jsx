import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAddAPIKey } from "../../hooks/useAddAPIKey"
import { useAuthentication } from "../../hooks/useAuthentication"
import Home from "../Home/Home"

const Register = () => {

    const navigate = useNavigate()

    const { createUser, error: authError, loading } = useAuthentication()
    const { addAPIKey } = useAddAPIKey()

    const [displayName, setDisplayName] = useState('')
    const [apiKey, setApiKey] = useState('')
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

        // Creates user 
        const res = await createUser(user)
        console.log(res)

        // Update firebase db with wmail and API key
        const addApiKeyFirebase = await addAPIKey(email, apiKey)

        navigate('/')
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
                    API Key:
                    <input
                        type="text"
                        onChange={e => setApiKey(e.target.value)}
                        value={apiKey}
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