/**
 * Created by faradj on 5/3/17.
 */
import React from 'react';

export default class TextareaField extends React.Component {
    render () {
        const {
            columnClassName,
            htmlFor,
            textareaClassName,
            onChange,
            textareaId,
            textareaName,
            textareaRows,
            textareaPlaceholder,
            value
        } = this.props;
        
        return this.props.display ? (
            <div className={columnClassName}>
                <label htmlFor={htmlFor}>{this.props.children}</label>
                <textarea className={textareaClassName} id={textareaId} onChange={onChange} name={textareaName} rows={textareaRows} value={value} placeholder={textareaPlaceholder}/>
            </div>
        ) : null;
    }
}