import React from 'react';
import Block from '../../doctors/block';
const backgroundImageSrc = require('../../../../../images/dashboard/profile/profile-background.jpg');
const path = '/static/js/dist/';

export default class PatientProfile extends React.Component {
    render () {
        const data = this.props.data;
        const fullname  = `${data.lastname} ${data.firstname} ${data.middlename}`;
        return (
            <div>
                <div className="content bg-image" style={{backgroundImage: `url(${path + backgroundImageSrc})`}}>
                    <div className="push-50-t push-15 clearfix">
                        <div className="push-15-r pull-left animated fadeIn">
                            <img className="img-avatar img-avatar-thumb" src="assets/img/avatars/avatar13.jpg" alt=""/>
                        </div>
                        <h1 className="h2 text-white push-5-t animated zoomIn">{fullname}</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-sm-8">
                             <Block title="Личные данные">
                                 <div className="row">
                                    <div className="col-sm-12">
                                        <div className="block">
                                            <div className="block-content block-content-narrow">
                                                <div className="form-group">
                                                    <div className="col-sm-4">
                                                        <label className="col-xs-12" htmlFor="blocks-username">Почта</label>
                                                        <div className="col-xs-12">
                                                            {data.email}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <label className="col-xs-12" htmlFor="blocks-username">Возраст</label>
                                                        <div className="col-xs-12">
                                                            {data.age}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <label className="col-xs-12" htmlFor="blocks-username">Мобильный номер</label>
                                                        <div className="col-xs-12">
                                                            {data.phoneNumber}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-sm-12">
                                        <div className="block">
                                            <div className="block-content block-content-narrow">
                                                <div className="form-group">
                                                    <div className="col-sm-4">
                                                        <label className="col-xs-12" htmlFor="blocks-username">Род</label>
                                                        <div className="col-xs-12">
                                                            {data.gender}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <label className="col-xs-12" htmlFor="blocks-username">Адрес</label>
                                                        <div className="col-xs-12">
                                                            {data.address}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                             </Block>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}