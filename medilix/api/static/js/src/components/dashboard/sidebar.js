/**
 * Created by faradj on 4/16/17.
 */
import React from 'react';
import { Link } from 'react-router';
import Menu from './menu';
import MenuItem from './menuItem';

export default class Sidebar extends React.Component {

    render () {
        const currentUserGroup = this.props.currentUserGroup;
        const menuItems = {
            doctor: [<MenuItem link="/app" icon="si si-speedometer" className="sidebar-mini-hide">
                        Dashboard
                    </MenuItem>,
                    <li className="nav-main-heading"><span className="sidebar-mini-hide">User Interface</span></li>,
                    <MenuItem link="/app/dashboard/timetable" icon="si si-calendar" className="nav-submenu">
                        Timetable
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/notifications" icon="si si-envelope" className="nav-submenu">
                        Notifications
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/appointment" icon="fa fa-leanpub" className="nav-submenu">
                        Appointment
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/patients" icon="si si-users" className="nav-submenu">
                        Patients
                    </MenuItem>
            ],
            patient: [
                <MenuItem link="/app" icon="si si-speedometer" className="sidebar-mini-hide">
                        Dashboard
                    </MenuItem>,
                    <li className="nav-main-heading"><span className="sidebar-mini-hide">User Interface</span></li>,
                    <MenuItem link="/app/dashboard/timetable" icon="si si-calendar" className="nav-submenu">
                        Timetable
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/notifications" icon="si si-envelope" className="nav-submenu">
                        Notifications
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/doctors" icon="si si-users" className="nav-submenu">
                        Doctors
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/medical-card" icon="fa fa-id-card-o" className="nav-submenu">
                        Medical Card
                    </MenuItem>
            ]
        };
        return (
            <nav id="sidebar">
                <div id="sidebar-scroll">
                    <div className="sidebar-content">
                        <div className="side-header side-content bg-white-op">
                            <button className="btn btn-link text-gray pull-right hidden-md hidden-lg" type="button" data-toggle="layout" data-action="sidebar_close">
                                <i className="fa fa-times"/>
                            </button>
                            <Link className="h5 text-white" to="/app">
                                <i className="fa fa-medium text-primary"/> <span className="h4 font-w600 sidebar-mini-hide">edilix</span>
                            </Link>
                        </div>

                        <div className="side-content">
                            <Menu>
                                {menuItems[currentUserGroup]}
                            </Menu>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}