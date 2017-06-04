import React from 'react';
import HomeHeader from '../components/home/homeHeader';

export default class MainLayout extends React.Component {
    render () {
        const children = this.props.children;
        return (
            <div id="page-container" className="side-scroll header-navbar-fixed header-navbar-transparent">
                <HomeHeader />
                <main id="main-container">
                    {children}
                </main>
            </div>
        )
    }
}