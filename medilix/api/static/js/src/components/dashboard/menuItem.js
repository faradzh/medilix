/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
    render () {
        const { link, icon, className, children } = this.props;
        return (
            <li>
                <Link to={link}>
                    <i className={icon}/><span className={className}>{children}</span>
                </Link>
            </li>
        )
    }
}