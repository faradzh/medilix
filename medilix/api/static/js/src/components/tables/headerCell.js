/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';

export default class HeaderCell extends React.Component {

    render () {
        const { className, style, children } = this.props;
        return (
            <th className={className} style={style}>{children}</th>
        )
    }
}