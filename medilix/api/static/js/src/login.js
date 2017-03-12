/**
 * Created by faradj on 3/6/17.
 */
import React from 'react';
import { browserHistory } from 'react-router';
import auth from './auth';
require('../../css/login_form.css');

export default class Login extends React.Component {
    componentDidMount () {
        $('.message a').click(function(){
           $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;

        auth.login(username, password, (loggedIn) => {
            this.props.router.push('/app/');
        });
    };

    render () {
        return (
              <div className="login-page">
                  <div className="form">
                    <form className="register-form">
                      <input type="text" placeholder="username" ref="username"/>
                      <input type="password" placeholder="password" ref="password"/>
                      <input type="text" placeholder="email address"/>
                      <button>create</button>
                      <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                      <input type="text" placeholder="username" ref="username"/>
                      <input type="password" placeholder="password" ref="password"/>
                      <button>login</button>
                      <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                  </div>
              </div>
        )
    }
}