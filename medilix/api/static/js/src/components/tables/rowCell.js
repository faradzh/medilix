/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';

export default class Cell extends React.Component {

    render () {
        const { className, children } = this.props;
        return (
            <td className={className}>{children}</td>
        )
    }
}