import React from 'react';

export default class SignUp extends React.Component {
    render () {
        return (
            <div className="bg-white pulldown">
                <div className="content content-boxed overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                            <div className="push-30-t push-20 animated fadeIn">

                                <div className="text-center">
                                    <i className="fa fa-2x fa-circle-o-notch text-primary"/>
                                    <h1 className="h3 push-10-t">Create Account</h1>
                                </div>

                                <form className="js-validation-register form-horizontal push-50-t push-50" method="post">
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input className="form-control" type="text" id="register-username" name="register-username" placeholder="Please enter a username"/>
                                                <label htmlFor="register-username">Username</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input className="form-control" type="email" id="register-email" name="register-email" placeholder="Please provide your email"/>
                                                <label htmlFor="register-email">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input className="form-control" type="password" id="register-password" name="register-password" placeholder="Choose a strong password.."/>
                                                <label htmlFor="register-password">Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input className="form-control" type="password" id="register-password2" name="register-password2" placeholder="..and confirm it"/>
                                                <label htmlFor="register-password2">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-7 col-sm-8">
                                            <label className="css-input switch switch-sm switch-success">
                                                <input type="checkbox" id="register-terms" name="register-terms"/><span/> I agree with terms &amp; conditions
                                            </label>
                                        </div>
                                        <div className="col-xs-5 col-sm-4">
                                            <div className="font-s13 text-right push-5-t">
                                                <a href="#" data-toggle="modal" data-target="#modal-terms">View Terms</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                                            <button className="btn btn-sm btn-block btn-success" type="submit">Create Account</button>
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

SignUp.defaultProps = {

};