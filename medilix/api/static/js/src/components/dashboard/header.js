/**
 * Created by faradj on 4/16/17.
 */
import React from 'react';

export default class Header extends React.Component {
    render () {
        return (
            <header id="header-navbar" className="content-mini content-mini-full">
                <ul className="nav-header pull-right">
                    <li>
                        <div className="btn-group">
                            <button className="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button">
                                <img src="assets/img/avatars/avatar10.jpg" alt="Avatar"/>
                                <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-header">Profile</li>
                                <li>
                                    <a tabIndex="-1" href="base_pages_inbox.html">
                                        <i className="si si-envelope-open pull-right"/>
                                        <span className="badge badge-primary pull-right">3</span>Inbox
                                    </a>
                                </li>
                                <li>
                                    <a tabIndex="-1" href="base_pages_profile.html">
                                        <i className="si si-user pull-right"/>
                                        <span className="badge badge-success pull-right">1</span>Profile
                                    </a>
                                </li>
                                <li>
                                    <a tabIndex="-1" href="javascript:void(0)">
                                        <i className="si si-settings pull-right"/>Settings
                                    </a>
                                </li>
                                <li className="divider"/>
                                <li className="dropdown-header">Actions</li>
                                <li>
                                    <a tabIndex="-1" href="base_pages_lock.html">
                                        <i className="si si-lock pull-right"/>Lock Account
                                    </a>
                                </li>
                                <li>
                                    <a tabIndex="-1" href="base_pages_login.html">
                                        <i className="si si-logout pull-right"/>Log out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button className="btn btn-default" data-toggle="layout" data-action="side_overlay_toggle" type="button">
                            <i className="fa fa-tasks"/>
                        </button>
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
                    <li>
                        <button className="btn btn-default pull-right" data-toggle="modal" data-target="#apps-modal" type="button">
                            <i className="si si-grid"/>
                        </button>
                    </li>
                    <li className="visible-xs">
                        <button className="btn btn-default" data-toggle="class-toggle" data-target=".js-header-search" data-class="header-search-xs-visible" type="button">
                            <i className="fa fa-search"/>
                        </button>
                    </li>
                    <li className="js-header-search header-search">
                        <form className="form-horizontal" action="base_pages_search.html" method="post">
                            <div className="form-material form-material-primary input-group remove-margin-t remove-margin-b">
                                <input className="form-control" type="text" id="base-material-text" name="base-material-text" placeholder="Search.."/>
                                <span className="input-group-addon"><i className="si si-magnifier"/></span>
                            </div>
                        </form>
                    </li>
                </ul>
            </header>
        )
    }
}