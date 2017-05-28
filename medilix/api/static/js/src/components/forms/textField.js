/**
 * Created by faradj on 4/15/17.
 */
import React from 'react';
import ErrorMessage from './errorMessage';

export default class TextField extends React.Component {
    shouldDisplayError = () => {
        return this.props.showError && this.props.errorText != undefined;
    };

    renderClassName = () => {
        const defaultClassName = "form-group";
        const errorClassName = " has-error";
        return this.shouldDisplayError() ? defaultClassName + errorClassName : defaultClassName;
    };

    render () {
        const onFieldChanged = this.props.onFieldChanged;
        const { id, type, text, name, errorText, placeholder, inputClassName } = this.props;
        return (
            <div className={this.renderClassName()}>
                <div className="col-xs-12">
                    <div className="form-material form-material-success">
                        <input id={id} type={type} placeholder={placeholder} name={name} className={inputClassName} onChange={onFieldChanged}/>
                        <ErrorMessage display={this.shouldDisplayError()} errorText={errorText} />
                        <label htmlFor="register-username">{text}</label>
                    </div>
                </div>
            </div>

            
        )
    }
}

TextField.propTypes = {
    showError: React.PropTypes.bool.isRequired,
    onFieldChanged: React.PropTypes.func.isRequired
};

TextField.defaultProps = {
    inputClassName: 'form-control'
};