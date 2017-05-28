/**
 * Created by faradj on 5/3/17.
 */
import React from 'react';

export default class InputField extends React.Component {
    render () {
        const {
            columnClassName,
            htmlFor,
            inputClassName,
            inputType,
            onChange,
            inputId,
            inputName,
            inputPlaceholder,
            value
        } = this.props;

        return this.props.display ? (
            <div className={columnClassName}>
                <label htmlFor={htmlFor}>{this.props.children}</label>
                <input className={inputClassName} type={inputType} onChange={onChange} value={value} id={inputId} name={inputName} placeholder={inputPlaceholder}/>
            </div>
        ) : null;
    }
}

InputField.defaultProps = {
    display: true
};