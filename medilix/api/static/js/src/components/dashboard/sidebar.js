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
                        Кабинет
                    </MenuItem>,
                    <li className="nav-main-heading"><span className="sidebar-mini-hide">Основное меню</span></li>,
                    <MenuItem link="/app/dashboard/timetable" icon="si si-calendar" className="nav-submenu">
                        Расписание
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/notifications" icon="si si-envelope" className="nav-submenu">
                        Уведомления
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/appointment" icon="fa fa-leanpub" className="nav-submenu">
                        Текущий прием
                    </MenuItem>
            ],
            patient: [
                <MenuItem link="/app" icon="si si-speedometer" className="sidebar-mini-hide">
                        Кабинет
                    </MenuItem>,
                    <li className="nav-main-heading"><span className="sidebar-mini-hide">Основное меню</span></li>,
                    <MenuItem link="/app/dashboard/timetable" icon="si si-calendar" className="nav-submenu">
                        Расписание
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/notifications" icon="si si-envelope" className="nav-submenu">
                        Уведомления
                    </MenuItem>,
                    <MenuItem link="/app/dashboard/medical-record" icon="fa fa-id-card-o" className="nav-submenu">
                        Медицинская карта
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