/**
 * Created by faradj on 4/15/17.
 */
import React from 'react';

export default class ErrorMessage extends React.Component {
    render () {
        const errorText = this.props.errorText;
        const shouldDisplay = this.props.display;
        if (shouldDisplay){
            return (
                <div id="val-username-error" className="help-block animated fadeInDown">{errorText}</div>
            )
        }
        return null;
    }
}
