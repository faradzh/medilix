/**
 * Created by faradj on 5/13/17.
 */
import React from 'react';
import HeaderCell from './headerCell';

export default class Header extends React.Component {

    render () {
        const headers = this.props.headers;
        return (
            <thead>
                <tr>
                    {
                        headers.map((header) => {
                            return <HeaderCell key={header.id}
                                               className={header.className}
                                               style={header.style}>
                                        {header.children}
                                   </HeaderCell>
                        })
                    }
                </tr>
            </thead>
        )
    }
}