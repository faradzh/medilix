/**
 * Created by faradj on 3/6/17.
 */
import React from 'react';
import { browserHistory } from 'react-router';
import auth from './auth';

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
            <div className="bg-white pulldown">
                <div className="content content-boxed overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                            <div className="push-30-t push-50 animated fadeIn">
                                <div className="text-center">
                                    <i className="fa fa-2x fa-circle-o-notch text-primary"/>
                                    <p className="text-muted push-15-t">A perfect match for your project</p>
                                </div>

                                <form className="js-validation-login form-horizontal push-30-t" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-primary floating">
                                                <input className="form-control" type="text" ref="username" id="login-username" name="login-username"/>
                                                <label htmlFor="login-username">Username</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-primary floating">
                                                <input className="form-control" type="password" ref="password" id="login-password" name="login-password"/>
                                                <label htmlFor="login-password">Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label className="css-input switch switch-sm switch-primary">
                                                <input type="checkbox" id="login-remember-me" name="login-remember-me"/><span/> Remember Me?
                                            </label>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="font-s13 text-right push-5-t">
                                                <a href="base_pages_reminder_v2.html">Forgot Password?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group push-30-t">
                                        <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                                            <button className="btn btn-sm btn-block btn-primary" type="submit">Log in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}