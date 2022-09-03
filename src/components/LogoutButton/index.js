// Write your JS code here
import Cookies from 'js-cookie'

const LogoutButton = history => {
  const {history1} = history

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history1.replace('/login')
  }
  return (
    <button type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default LogoutButton
