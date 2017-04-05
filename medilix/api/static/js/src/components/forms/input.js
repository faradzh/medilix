/**
 * Created by faradj on 3/14/17.
 */
import React from 'react';

export default class Input extends React.Component {
    render () {
        const { labelName, labelFor, type, id, name, className } = this.props;
        return (
            <div>
                <label for={labelFor}>{labelName}</label>
                <input type={type} id={id} name={name} className={className}/>
            </div>
        )
    }
}

Input.defaultProps = {
    type: 'text'
};