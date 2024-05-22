import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLoginError: false,
    errMsg: '',
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async e => {
    e.preventDefault()
    this.setState({isLoginError: false, errMsg: ''})
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isLoginError: true, errMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, isLoginError, errMsg} = this.state

    return (
      <div className="login-container">
        <div className="login-img-container">
          <img
            className="login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <div className="form-container">
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div className="username-container">
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                className="username-input"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="password-container">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                className="password-input"
                id="password"
                placeholder="password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {isLoginError && <p className="err-msg">*{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
