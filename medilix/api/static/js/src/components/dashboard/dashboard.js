import React from 'react';
import SidebarContainer from '../../containers/dashboard/sidebarContainer';
import HeaderContainer from '../../containers/dashboard/headerContainer';

export default class Dashboard extends React.Component {

    render () {
        return (
           <div id="page-container" className="sidebar-l sidebar-o side-scroll header-navbar-fixed">

                <SidebarContainer />
                <HeaderContainer />

                <main id="main-container">
                    {this.props.children}
                </main>
            </div>
        )
    }
}