/**
 * Created by faradj on 5/21/17.
 */
import React from 'react';

class Block extends React.Component {
    render () {
        const {className, title, children} = this.props;
        return (
            <div className={className}>
                <div className="block-header bg-info">
                    <ul className="block-options">
                        <li>
                            <button type="button"><i className="si si-settings"/></button>
                        </li>
                    </ul>
                    <h3 className="block-title">{title}</h3>
                </div>
                <div className="block-content">
                    {children}
                </div>
            </div>
        )
    }
}

export default Block;

Block.defaultProps = {
    className: 'block block-themed'
};