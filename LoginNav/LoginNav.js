import React, { Component } from "react";
import "./LoginNav.css";
import axios from 'axios';

class LoginNav extends Component {
  
  constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4" id="navanchors">
            <div className="row">
              <div className="column-1-6">
                <div className="nav-item dropdown dropright" id="nav-anchors">
                  <a
                    className="nav-link dropdown-toggle"
                    id="nav-home"
                    href="a"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Customer
                  </a>
                  <div className="dropdown-menu" id="login-menu">
                    <form className="px-4 py-3">
                      <div className="form-group">
                        <label
                          htmlFor="userNameDropDownForm"
                          id="label-user-form"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userNameField"
                          placeholder="user name"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="passwordDropDownForm"
                          id="label-user-form"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordField"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="dropdownCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="dropdownCheck"
                          id="label-user-form"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="user-btn"
                      >
                        Sign in
                      </button>
                    </form>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="a">
                      New around here? Sign up
                    </a>
                    <a className="dropdown-item" href="a">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
              <div class="column-2-6">
                <div className="nav-item dropdown dropright">
                  <a
                    className="nav-link dropdown-toggle"
                    id="nav-home"
                    href="a"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dispatch
                  </a>
                  <div className="dropdown-menu" id="login-menu">
                    <form className="px-4 py-3">
                      <div className="form-group">
                        <label
                          htmlFor="userNameDropDownForm"
                          id="label-user-form"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userNameField"
                          placeholder="user name"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="passwordDropDownForm"
                          id="label-user-form"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordField"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="dropdownCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="dropdownCheck"
                          id="label-user-form"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="user-btn"
                      >
                        Sign in
                      </button>
                    </form>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="a">
                      New around here? Sign up
                    </a>
                    <a className="dropdown-item" href="a">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <a className="text-white h4" href="/customer">
                  Customer
                </a>
                <a className="text-white h4" href="/dispatch">
                  Dispatch
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            id="navbtn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <p>Click on Fred Sanford to Sign Up or Login!!</p>

          <h1 className="text" id="title">
            FAST
          </h1>
        </nav>
      </div>
    );
  }
}

export default LoginNav;


