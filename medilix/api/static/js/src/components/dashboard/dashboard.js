import React from 'react';
import Sidebar from './sidebar';
import Header from './header';

export default class Dashboard extends React.Component {
    render () {
        return (
           <div id="page-container" className="sidebar-l sidebar-o side-scroll header-navbar-fixed">

                <Sidebar />

                <Header />

                <main id="main-container">
                    <div className="content bg-image">
                        <div className="push-50-t push-15 clearfix">
                            <div className="push-15-r pull-left animated fadeIn">
                                <img className="img-avatar img-avatar-thumb" src="assets/img/avatars/avatar13.jpg" alt=""/>
                            </div>
                            <h1 className="h2 text-white push-5-t animated zoomIn">John Parker</h1>
                            <h2 className="h5 text-white-op animated zoomIn">UI Designer</h2>
                        </div>
                    </div>

                    <div className="content bg-white border-b">
                        <div className="row items-push text-uppercase">
                            <div className="col-xs-6 col-sm-3">
                                <div className="font-w700 text-gray-darker animated fadeIn">Sales</div>
                                <a className="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">17980</a>
                            </div>
                            <div className="col-xs-6 col-sm-3">
                                <div className="font-w700 text-gray-darker animated fadeIn">Products</div>
                                <a className="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">27</a>
                            </div>
                            <div className="col-xs-6 col-sm-3">
                                <div className="font-w700 text-gray-darker animated fadeIn">Followers</div>
                                <a className="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">1360</a>
                            </div>
                            <div className="col-xs-6 col-sm-3">
                                <div className="font-w700 text-gray-darker animated fadeIn">739 Ratings</div>
                                <div className="text-warning push-10-t animated flipInX">
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star-half-o"/>
                                    <span className="text-muted">(4.9)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}