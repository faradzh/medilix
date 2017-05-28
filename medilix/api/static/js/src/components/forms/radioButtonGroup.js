/**
 * Created by faradj on 4/15/17.
 */
import React from 'react';
import ErrorMessage from '../../components/forms/errorMessage';

export default class RadioButtonGroup extends React.Component {
    shouldDisplayError = () => {
        return this.props.errorText != undefined & this.props.showError;
    };

    renderClassName = () => {
        const defaultClassName = "";
        const errorClassName = "has-error";
        return this.shouldDisplayError() ? defaultClassName + errorClassName : defaultClassName;
    };

    render () {
        const {
            onChange,
            columnClassName,
            name,
            mainLabelClassName,
            mainLabelText,
            labelClassName,
            defaultValue,
            buttons} = this.props;
        const radioButtons = buttons.map((button) => {
            if (button.id == defaultValue){
                return (
                    <label key={button.id} className={labelClassName}>
                        <input checked="true" key={button.id} id={button.id} type="radio" name={name} onChange={onChange}/><span/> {button.text}
                    </label>)
            }
             return (<label key={button.id} className={labelClassName}>
                        <input key={button.id} id={button.id} type="radio" name={name} onChange={onChange}/><span/> {button.text}
                    </label>)
        });

        return (
            this.props.display ?
            <div className={this.renderClassName()}>
                <label className={mainLabelClassName}>{mainLabelText}</label>
                <div className={columnClassName}>
                    {radioButtons}
                    <ErrorMessage display={this.shouldDisplayError()} errorText={this.props.errorText} />
                </div>
            </div> : null
        )
    }
}

RadioButtonGroup.defaultProps = {
    labelClassName: 'css-input css-radio css-radio-warning push-10-r',
    display: true
};