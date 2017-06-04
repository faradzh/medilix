/**
 * Created by faradj on 4/16/17.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render () {
        return (
            <header id="header-navbar" className="content-mini content-mini-full">
                <ul className="nav-header pull-right">
                    <li>
                        <div className="btn-group">
                            <button className="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button">
                                <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-header">Профиль</li>
                                <li>
                                    <Link tabIndex="-1" to="/app/dashboard/profile/edit">
                                        <i className="si si-user pull-right"/>
                                        Редактировать
                                    </Link>
                                </li>
                                <li>
                                    <Link tabIndex="-1" to="/app/dashboard/profile">
                                        <i className="si si-user pull-right"/>
                                        Отобразить
                                    </Link>
                                </li>
                                <li className="divider"/>
                                <li className="dropdown-header">Действия</li>
                                <li>
                                    <a tabIndex="-1" href="" onClick={this.props.logout}>
                                        <i className="si si-logout pull-right"/>Выйти
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <ul className="nav-header pull-left">
                    <li className="hidden-md hidden-lg">
                        <button className="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                            <i className="fa fa-navicon"/>
                        </button>
                    </li>
                    <li className="hidden-xs hidden-sm">
                        <button className="btn btn-default" data-toggle="layout" data-action="sidebar_mini_toggle" type="button">
                            <i className="fa fa-ellipsis-v"/>
                        </button>
                    </li>
                </ul>
            </header>
        )
    }
}