// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="logout-button-container">
      <button
        type="button"
        className="logout-button"
        onClick={onClickLogoutBtn}
      >
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
