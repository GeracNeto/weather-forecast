// CSS
import './Form.css'

const Form = ({ formName, name, email, password, confirmPassword }) => {
    return (
        <form>
            <h1>{formName}<span>.</span></h1>
            {name && (
                <label>
                    Name:
                    <input type="text" />
                </label>
            )}
            {email && (
                <label>
                    Email:
                    <input type="email" />
                </label>
            )}
            {password && (
                <label>
                    Password:
                    <input type="password" />
                </label>
            )}
            {confirmPassword && (
                <label>
                    Confirm Password:
                    <input type="password" />
                </label>
            )}
            {formName === 'Login' ? (
                <button className='btn'>Login</button>
            ) : (
                <button className='btn'>Register</button>
            )}
        </form>
    )
}

export default Form