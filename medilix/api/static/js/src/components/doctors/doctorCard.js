import React from 'react';
import { Link } from 'react-router';
const profileImageSrc = require('../../../../images/dashboard/profile/avatar.png');
const path = '/static/js/dist/';

export default class DoctorCard extends React.Component {
    render () {
        const {
            lastname,
            firstname,
            middlename,
            specialization,
            experience,
            hospitals,
            price,
            numOfFeedbacks,
            bio,
            userId
        } = this.props;
        return (
           <div className="col-md-6" data-toggle="appear" data-name="animated zoomIn">
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">{`${lastname} ${firstname} ${middlename}`}</h3>
                        <h3 className="block-title">{specialization}</h3>
                    </div>
                    <div className="block-content block-content-full bg-image">
                        <img className="img-avatar img-avatar96 img-avatar-thumb" src={path + profileImageSrc} alt=""/>
                        <ul id="profile-card-list" className="list-group">
                            <li className="list-group-item">{`Опыт работы: ${experience} лет`}</li>
                            <li className="list-group-item">{`Больница: ${hospitals}`}
                                <i className=" fa fa-map-marker pull-right"/>
                            </li>
                            <li className="list-group-item">{`Цена за посещение: ${price} сом`}</li>
                        </ul>
                        <div className="block-content">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="js-rating" data-score="3" data-star-on="fa fa-fw fa-3x fa-heart text-city" data-star-off="fa fa-fw fa-3x fa-heart text-gray" style={{cursor: 'pointer'}}>
                                        <i data-alt="1" className="fa fa-fw fa-heart text-city" title="Bad"/>&nbsp;
                                        <i data-alt="2" className="fa fa-fw fa-heart text-city" title="Poor"/>&nbsp;
                                        <i data-alt="3" className="fa fa-fw fa-heart text-city" title="Regular"/>&nbsp;
                                        <i data-alt="4" className="fa fa-fw fa-heart text-gray" title="Good"/>&nbsp;
                                        <i data-alt="5" className="fa fa-fw fa-heart text-gray" title="Gorgeous"/>
                                        <input name="score" type="hidden" value="3"/>
                                    </div>
                                    <span id="num-of-feedbacks"><a href="#">{`${numOfFeedbacks} отзывов`}</a></span>
                                </div>
                                <div className="col-sm-8">
                                    <Link to={`/app/doctors/${userId}`}>
                                        <button id="appointment-button" className="btn btn-minw btn-success" type="button">Профиль</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content">
                        <p>
                            {bio}
                        </p>
                    </div>
                </div>
           </div>
        )
    }
}