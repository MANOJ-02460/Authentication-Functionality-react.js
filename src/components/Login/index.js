// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const onSuccessfullLogin = () => {
    const {history} = props
    history.replace('/')
  }
  const onClickLoginBtn = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchData = await response.json()
      const jwtToken = fetchData.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      onSuccessfullLogin(jwtToken)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-button" type="submit" onClick={onClickLoginBtn}>
        Login With Sample Creds
      </button>
    </div>
  )
}

export default Login
