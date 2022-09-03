// Write your JS code here
import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  onSubmitForm = event => {
    event.preventDefault()

    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userdetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  onSubmitSuccess = token => {
    const {history} = this.props

    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <form className="login-page" onSubmit={this.onSubmitForm}>
        <h1>Please Login</h1>
        <button type="submit">{`Login with Sample Creds" as text content`}</button>
      </form>
    )
  }
}
export default Login
