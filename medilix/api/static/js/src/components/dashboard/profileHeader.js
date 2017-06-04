/**
 * Created by faradj on 5/27/17.
 */
import React from 'react';
import { Link } from 'react-router';

class ProfileHeader extends React.Component {
    render () {
        const { backgroundImageSrc, path, profileImageSrc, data } = this.props;
        return (
            <div className="block">
                <div className="content bg-image" style={{backgroundImage: `url(${path + backgroundImageSrc})`}}>
                    <div className="push-15 clearfix">
                        <div className="push-15-r pull-left animated fadeIn">
                            <img className="img-avatar img-avatar96" src={path + profileImageSrc} alt=""/>
                        </div>
                        <h1 className="h3 text-black push-30-t animated zoomIn">{`${data.lastname} ${data.firstname} ${data.middlename}`}</h1>
                        <h2 className="h4 text-black-op animated zoomIn">{data.specializationName}</h2>
                        <Link to={`/app/doctors/${data.user_id}/timetable`}>
                            <button id="timetable-button" className="btn btn-rounded btn-success push-30-t push-10" type="button"><i className="si si-calendar"/> Расписание</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileHeader;