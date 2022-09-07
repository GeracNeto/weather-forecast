import Form from "../../components/Form"
import Home from "../Home/Home"

const Register = () => {
    return (
        <Home>
            <Form
                formName='Crate new account'
                name={true}
                email={true}
                password={true}
                confirmPassword={true}
            />
        </Home>
    )
}

export default Register