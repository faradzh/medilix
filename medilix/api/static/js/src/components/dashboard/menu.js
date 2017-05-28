/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';

export default class Menu extends React.Component {
    render () {
        return (
            <ul className="nav-main">
                {this.props.children}
            </ul>
        )
    }
}