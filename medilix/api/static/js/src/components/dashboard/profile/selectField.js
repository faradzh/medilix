/**
 * Created by faradj on 5/3/17.
 */
import React from 'react';

export default class SelectField extends React.Component {

    render () {
        const {
            columnClassName,
            htmlFor,
            selectClassName,
            onChange,
            selectId,
            selectName,
            options,
            style,
            dataPlaceholder,
            multiple,
            tabIndex,
            ariaHidden,
            initialOption,
            defaultOption
        } = this.props;

        const handledOptions = options.map((option) => {
            return <option key={option.id} value={option.id}>{option.name}</option>
        });
        return this.props.display ? (
            <div className={columnClassName}>
                <label htmlFor={htmlFor}>{this.props.children}</label>
                <select className={selectClassName} onChange={onChange} id={selectId} name={selectName} size="1" data-placeholder={dataPlaceholder}
                style={style} multiple={multiple} value={defaultOption} tabIndex={tabIndex} aria-hidden={ariaHidden}>
                    {initialOption ? <option value="0">{this.props.initialOption}</option> : null}
                    {handledOptions}
                </select>
            </div>
        ) : null;
    }   
}

SelectField.defaultProps = {
    options: []
};