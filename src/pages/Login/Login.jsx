import Form from "../../components/Form"
import Home from "../Home/Home"

const Login = () => {
  return (
    <Home>
      <Form
        formName='Login'
        email={true}
        password={true}
      />
    </Home>
  )
}

export default Login