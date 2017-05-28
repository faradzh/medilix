import React from 'react';

export default class MainLayout extends React.Component {
    render () {
        const children = this.props.children;
        return (
            <div id="page-container" className="side-scroll header-navbar-fixed header-navbar-transparent">
                <main id="main-container">
                    {children}
                </main>
            </div>
        )
    }
}