import React from 'react';
import Header from './home/header';

export default class MainLayout extends React.Component {
    render () {
        const children = this.props.children;
        return (
            <div>
                <Header />
                {children}
            </div>
        )
    }
}