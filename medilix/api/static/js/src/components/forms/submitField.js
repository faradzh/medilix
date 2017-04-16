/**
 * Created by faradj on 4/16/17.
 */
import React from 'react';

export default class SubmitField extends React.Component {
    render () {
        return (
            <div className="form-group">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                    <button className="btn btn-sm btn-block btn-success" type="submit">Create Account</button>
                </div>
            </div>
        )
    }
} 