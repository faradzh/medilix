/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';
import { Link } from 'react-router';

export default class HomeHeader extends React.Component {
    render () {
        return (
            <header id="header-navbar" className="content-mini content-mini-full">
                <div className="content-boxed">
                    <ul className="js-nav-main-header nav-main-header pull-right">
                        <li className="text-right hidden-md hidden-lg">
                            <button className="btn btn-link text-white" data-toggle="class-toggle" data-target=".js-nav-main-header" data-class="nav-main-header-o" type="button">
                                <i className="fa fa-times"/>
                            </button>
                        </li>
                        <li>
                            <Link to="/app/signup">Регистрация</Link>
                        </li>
                        <li>
                            <Link to="/app/login">Вход</Link>
                        </li>
                        <li>
                            <Link to="/app/dashboard">Кабинет</Link>
                        </li>
                    </ul>

                    <ul className="nav-header pull-left">
                        <li className="header-content">
                            <Link to='/app' className="h5">
                                <i className="fa fa-medium text-primary"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
