/**
 * Created by faradj on 5/12/17.
 */
import React from 'react';

export default class CheckboxField extends React.Component {
    render () {
        const { className, columnClassName, onChange } = this.props;
        const title = this.props.children;
        return (
            <div className={columnClassName}>
                <label className={className}>
                    <input type="checkbox" name="repeatVisit" onChange={onChange} /><span/> {title}
                </label>
            </div>
        )
    }
}